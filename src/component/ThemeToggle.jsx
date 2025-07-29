import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react'; // optional: install `lucide-react` or use any icons

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      return localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-full bg-gray-200 dark:bg-white text-gray-800 dark:text-gray-200 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5 dark:text-black" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
