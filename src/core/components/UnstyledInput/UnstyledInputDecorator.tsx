import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeComponentProps,
  InputVariant,
  SidePlacement,
  Radius,
  Gap
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    inputType: 'input' | 'textarea';
    disabled: boolean;
    variant: InputVariant;
    placement: SidePlacement;
    radius: Radius;
    rt: Radius;
    rb: Radius;
    rl: Radius;
    rr: Radius;
    rtl: Radius;
    rtr: Radius;
    rbl: Radius;
    rbr: Radius;
    gap: Gap;
  }
>;

export const UnstyledInputDecorator = ({
  inputType,
  disabled,
  variant: inputVariant,
  placement: sidePlacement,
  radius,
  rt,
  rb,
  rl,
  rr,
  rtl,
  rtr,
  rbl,
  rbr,
  gap,
  className,
  children,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledInputDecorator', className, {
    inputType,
    theme,
    disabled,
    inputVariant,
    sidePlacement,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    gap,
    decorated: !!children
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
