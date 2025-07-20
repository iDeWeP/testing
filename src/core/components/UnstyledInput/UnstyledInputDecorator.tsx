import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  InputVariant,
  SidePlacement,
  Radius,
  Color,
  Gap
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputDecoratorProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputDecoratorProps,
  {
    inputType: 'input' | 'textarea';
    disabled: boolean;
    inputVariant: InputVariant;
    sidePlacement: SidePlacement;
    radius: Radius;
    r: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
    color: Color;
    gap: Gap;
  }
>;

export const UnstyledInputDecorator = ({
  inputType,
  disabled,
  inputVariant,
  sidePlacement,
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
  color,
  gap,
  className,
  children,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('inputDecorator', className, {
    inputType,
    theme,
    disabled,
    inputVariant,
    sidePlacement,
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
    color,
    gap,
    decorated: children
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    >
      {children}
    </span>
  );
};
