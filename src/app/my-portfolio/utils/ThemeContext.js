'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setIsDark(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark, mounted]);

  const toggleTheme = () => setIsDark(!isDark);

  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};