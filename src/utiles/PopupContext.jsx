import React, { createContext, useContext, useState } from 'react';

const PopupContext = createContext(); // Ensure this line is present

export const usePopupContext = () => useContext(PopupContext);

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <PopupContext.Provider value={{ isPopupOpen, setIsPopupOpen }}>
      {children}
    </PopupContext.Provider>
  );
};
