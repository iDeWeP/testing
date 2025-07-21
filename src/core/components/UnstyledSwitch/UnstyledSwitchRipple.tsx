import type {
  MergeProps,
  Variant,
  InnerScale,
  Color,
  RippleEffect,
  DefaultSize
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
    innerScale: InnerScale;
    color: Color;
    effect: RippleEffect;
  }
>;

export const UnstyledSwitchRipple = ({
  defaultSize,
  innerScale,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchRipple', className, {
    defaultSize,
    innerScale
  });

  return (
    <UnstyledRipple
      stateful
      scale="normal"
      className={mergedClassName}
      {...restProps}
    />
  );
};
