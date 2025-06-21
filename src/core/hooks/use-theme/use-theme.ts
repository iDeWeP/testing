import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme/theme';

export const useTheme = () => useContext(ThemeContext).theme;
