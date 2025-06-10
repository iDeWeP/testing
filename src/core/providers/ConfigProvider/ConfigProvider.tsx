import type { ReactNode, FC } from 'react';
import { ConfigContext } from '../../contexts/config/config';
import type { ComponentConfigContext } from '../../contexts/config/config.types';

interface Props {
  config: ComponentConfigContext;
  children?: ReactNode;
}

export const ConfigProvider: FC<Props> = ({ config, children }) => (
  <ConfigContext value={config}>{children}</ConfigContext>
);
