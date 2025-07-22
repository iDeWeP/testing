import { type ReactNode, useState, useMemo } from 'react';
import { ThemeContext } from '../../contexts/theme/theme';
import type { ComponentThemeContext } from '../../contexts/theme/theme.types';
import type { Theme } from '../../types';

type Props = {
  children?: ReactNode;
};

export const ThemeProvider = ({ children }: Props): ReactNode => {
  const [theme, setTheme] = useState<Theme>('light');

  const ctx = useMemo(
    (): ComponentThemeContext => ({
      theme,
      setTheme
    }),
    [theme]
  );

  return <ThemeContext value={ctx}>{children}</ThemeContext>;
};
