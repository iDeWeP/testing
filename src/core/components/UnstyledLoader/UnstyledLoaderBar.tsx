import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, Variant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledLoaderBarProps } from './UnstyledLoader.types';

type Props = MergeProps<
  UnstyledLoaderBarProps,
  {
    checked?: boolean;
    disabled: boolean;
    variant: Variant;
    color: Color;
  }
>;

export const UnstyledLoaderBar = ({
  checked,
  disabled,
  variant,
  color,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('loaderBar', className, {
    theme,
    checked,
    disabled,
    variant,
    color
  });

  return (
    <circle
      className={mergedClassName}
      {...restProps}
    />
  );
};
