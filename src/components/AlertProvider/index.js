import React, { createContext, useEffect, useRef, useState } from 'react';
import ReactDom from 'react-dom';
import './style.css';

export const AlertContext = createContext({});

function AlertProvider({ children }) {
  const [currentAlert, setCurrentAlert] = useState(null);
  const timer = useRef(null);

  const createAlert = (content) => {
    setCurrentAlert(content);
  }

  useEffect(() => {
    if (currentAlert) {
      clearTimeout(timer.current);

      timer.current = setTimeout(() => {
        setCurrentAlert(null);
      }, 5000);
    }
  }, [currentAlert]);

  console.log(currentAlert);

  return (
    <AlertContext.Provider value={{ createAlert }}>
      {children}
      {ReactDom.createPortal(
        <>
          {!!currentAlert && (
            <div className="popup-item">
              {currentAlert}
            </div>
          )}
        </>,
        document.getElementById("popup")
      )}
    </AlertContext.Provider>
  )
}

export default AlertProvider;