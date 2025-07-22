import type { ReactNode } from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { ComponentConfigContext } from '../../contexts/config/config.types';

type Props = {
  config: ComponentConfigContext;
  children?: ReactNode;
};

export const ConfigProvider = ({ config, children }: Props): ReactNode => (
  <ConfigContext value={config}>{children}</ConfigContext>
);
