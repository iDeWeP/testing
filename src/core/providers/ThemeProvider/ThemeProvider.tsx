import { type ReactNode, type FC, useState, useMemo } from 'react';
import { ThemeContext } from '../../contexts/theme/theme';
import type { Theme } from '../../types';

type Props = {
  children?: ReactNode;
};

export const ThemeProvider: FC<Props> = ({ children }) => {
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
