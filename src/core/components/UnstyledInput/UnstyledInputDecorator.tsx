import type {
  MergeComponentProps,
  InputVariant,
  SidePlacement,
  Radius
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    disabled: boolean;
    variant: InputVariant;
    placement: SidePlacement;
    radius: Radius;
  }
>;

export const UnstyledInputDecorator = ({
  disabled,
  variant: inputVariant,
  placement: sidePlacement,
  radius,
  className,
  children,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputDecorator', className, {
    disabled,
    inputVariant,
    sidePlacement,
    radius,
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
