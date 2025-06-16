import { type ReactNode, useState, useMemo } from 'react';
import { ThemeContext } from '../../contexts/theme/theme';
import type { Theme } from '../../types';

type Props = {
  children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  const ctx = useMemo(
    () => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext value={ctx}>{children}</ThemeContext>;
};
