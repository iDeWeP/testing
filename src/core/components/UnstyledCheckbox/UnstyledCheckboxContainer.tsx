import type { ReactNode } from 'react';
import type { MergeProps, DefaultSize, Margin, Radius } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledCheckboxContainerProps } from './UnstyledCheckbox.types';

type Props = MergeProps<
  UnstyledCheckboxContainerProps,
  {
    defaultSize: DefaultSize;
    margin: Margin;
    m: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
    radius?: Radius;
    r?: Radius;
    rt?: Radius;
    rb?: Radius;
    rl?: Radius;
    rr?: Radius;
    rtl?: Radius;
    rtr?: Radius;
    rbl?: Radius;
    rbr?: Radius;
    decorated: boolean;
  }
>;

export const UnstyledCheckboxContainer = ({
  defaultSize,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  radius = 'full',
  r,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  className,
  decorated,
  ...restProps
}: Props): ReactNode => {
  const mergedClassName = mergeClassName('checkboxContainer', className, {
    defaultSize,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    decorated
  });

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
