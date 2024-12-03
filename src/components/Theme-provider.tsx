import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi'; // Importing React Icons

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  if (theme === null) return null; // Don't render until theme is loaded on the client

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none"
    >
      {/* Render Sun or Moon icon based on current theme */}
      {theme === 'dark' ? (
        <FiMoon className="h-4 w-4 text-yellow-500" />
      ) : (
        <FiSun className="h-4 w-4 text-gray-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
