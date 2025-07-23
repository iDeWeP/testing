import type { ReactNode } from 'react';
import { UnstyledSwitch } from '../../../core/components/UnstyledSwitch/UnstyledSwitch';
import type { UnstyledSwitchProps } from '../../../core/components/UnstyledSwitch/UnstyledSwitch.types';

type Props = {
  clear?: boolean;
} & UnstyledSwitchProps;

export const Example = ({ clear, ...restProps }: Props): ReactNode => (
  <UnstyledSwitch
    color={clear ? 'unset' : 'primary'}
    {...restProps}
  />
);
