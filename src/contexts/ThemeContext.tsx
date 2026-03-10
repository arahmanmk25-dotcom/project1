import { useEffect } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Force light mode and clear any saved dark preference
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('hafco-theme');
  }, []);

  return <>{children}</>;
}

export function useTheme() {
  return { theme: 'light' as const, toggleTheme: () => {} };
}
