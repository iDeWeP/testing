import type { MergeComponentProps, Size, Radius } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'span',
  {
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    size: Size;
    radius: Radius;
  }
>;

export const UnstyledCheckboxTrail = ({
  valid,
  invalid,
  disabled,
  size,
  radius,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledCheckboxTrail', className, {
    valid,
    invalid,
    disabled,
    size,
    radius
  });

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};
