'use client'
import React, { useState, useEffect } from 'react';
import ThemeToggle from './Theme-provider';
import Threed from './ui/Threed';

const Model = () => {
    const [theme, setTheme] = useState<string>('light');
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

  return (
    <div>
        <Threed theme={theme} />
    </div>
  )
}

export default Model