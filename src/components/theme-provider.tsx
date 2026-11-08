'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { ThemePreference } from '@/types/learning';
import { updateProfile } from '@/lib/storage';

interface ThemeContextType {
  theme: ThemePreference;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: ThemePreference) => void;
  applySyncedTheme: (theme: ThemePreference) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => {},
  applySyncedTheme: () => {},
});

const THEME_STORAGE_KEY = 'english_steps_theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemePreference>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null;
    if (saved && (saved === 'light' || saved === 'dark' || saved === 'system')) {
      setThemeState(saved);
    }
  }, []);

  useEffect(() => {
    const updateTheme = () => {
      let active: 'light' | 'dark' = 'light';
      if (theme === 'system') {
        const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        active = systemDark ? 'dark' : 'light';
      } else {
        active = theme;
      }

      setResolvedTheme(active);

      const root = document.documentElement;
      root.setAttribute('data-theme', active);
      if (active === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    };

    updateTheme();

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => updateTheme();
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const applySyncedTheme = useCallback((syncedTheme: ThemePreference) => {
    setThemeState(syncedTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, syncedTheme);
    } catch {
      // Ignore storage error
    }
  }, []);

  const setTheme = useCallback(
    (newTheme: ThemePreference) => {
      applySyncedTheme(newTheme);
      updateProfile({ theme_preference: newTheme });
    },
    [applySyncedTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, applySyncedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
