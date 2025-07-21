import type {
  MergeProps,
  Variant,
  DefaultSize,
  SwitchScale,
  Color,
  RippleEffect
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledSwitchRippleProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchRippleProps,
  {
    valid: boolean;
    invalid: boolean;
    variant: Variant;
    defaultSize: DefaultSize;
    switchScale: SwitchScale;
    color: Color;
    effect: RippleEffect;
  }
>;

export const UnstyledSwitchRipple = ({
  defaultSize,
  switchScale,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchRipple', className, {
    defaultSize,
    switchScale
  });

  return (
    <UnstyledRipple
      stateful
      scale="peer"
      className={mergedClassName}
      {...restProps}
    />
  );
};
