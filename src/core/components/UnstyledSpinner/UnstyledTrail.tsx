import type {
  MergeElementProps as MergeComponentProps,
  Variant,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/mergeClassName/mergeClassName';

export type Props = MergeComponentProps<
  'circle',
  {
    isDisabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledTrail = ({
  isDisabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledTrail', className, {
    isDisabled,
    variant,
    color
  });

  return (
    <circle
      cx="20"
      cy="20"
      r="18"
      className={mergedClassName}
      {...restProps}
    />
  );
};
