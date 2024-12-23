// context/ThemeContext.tsx
'use client'
import { createContext,  useEffect, useState,   ReactNode } from 'react';

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);



export default function ThemeProvider ({ children }:{children:ReactNode}) {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    setIsDark(currentTheme === 'dark');
    document.documentElement.classList.toggle('dark', currentTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark';
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};