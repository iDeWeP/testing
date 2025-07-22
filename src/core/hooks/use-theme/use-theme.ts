import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/theme';
import type { Theme } from '../../types';

export const useTheme = (): Theme => useContext(ThemeContext).theme;
