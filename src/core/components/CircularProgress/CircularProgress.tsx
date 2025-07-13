import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import type { CircularProgressProps } from './CircularProgress.types';
import { circularProgressConfig } from './circularProgressConfig';
import { CircularProgressContainer } from './CircularProgressContainer';
import { CircularProgressLabel } from './CircularProgressLabel';

export const CircularProgress = (props: CircularProgressProps) => {
  const {
    disabled = false,
    variant,
    size,
    color,
    label,
    children,
    ...restProps
  } = useMergeProps('circularProgress', circularProgressConfig.props, props);

  return (
    <CircularProgressContainer size={size}>
      <UnstyledCircularProgress
        disabled={disabled}
        variant={variant}
        size={size}
        color={color}
        {...restProps}
      />
      {label && (
        <CircularProgressLabel
          disabled={disabled}
          variant={variant}
          size={size}
          color={color}
        >
          {children}
        </CircularProgressLabel>
      )}
    </CircularProgressContainer>
  );
};
