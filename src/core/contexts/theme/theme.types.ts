import type { Dispatch, SetStateAction } from 'react';
import type { Theme } from '../../types';

export type ComponentThemeContext = {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
};
