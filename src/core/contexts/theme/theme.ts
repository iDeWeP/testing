import { createContext } from 'react';
import type { ComponentThemeContext } from './theme.types';

const initialState: ComponentThemeContext = {
  theme: 'light',
  setTheme: () => {}
};

export const ThemeContext = createContext(initialState);
