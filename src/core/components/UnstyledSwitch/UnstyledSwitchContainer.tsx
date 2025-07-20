import type { MergeProps, Size } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledSwitchContainerProps } from './UnstyledSwitch.types';

type Props = MergeProps<
  UnstyledSwitchContainerProps,
  {
    size: Size;
  }
>;

export const UnstyledSwitchContainer = ({
  size,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('switchContainer', className, {
    size
  });

  return (
    <div
      className={mergedClassName}
      {...restProps}
    />
  );
};
