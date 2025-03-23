'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

const ThemeContext = createContext({
  dark: false,
  toggleDark: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <div className={dark ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
