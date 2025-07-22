import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledSwitch } from '../UnstyledSwitch/UnstyledSwitch';
import type { SwitchProps } from './Switch.types';
import { switchConfig } from './switchConfig';

export const Switch = (props: SwitchProps) => {
  const mergedProps = useMergeProps('switch', switchConfig.props, props);

  return <UnstyledSwitch {...mergedProps} />;
};
