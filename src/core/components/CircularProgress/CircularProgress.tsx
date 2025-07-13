import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { CircularProgressProps } from './CircularProgress.types';
import { circularProgressConfig } from './circularProgressConfig';
import { CircularProgressContainer } from './CircularProgressContainer';
import { CircularProgressLabel } from './CircularProgressLabel';

export const CircularProgress = (props: CircularProgressProps) => {
  const {
    label,
    children,
    disabled = false,
    variant,
    size,
    color,
    ...restProps
  } = useMergeProps('circularProgress', circularProgressConfig.props, props);

  return (
    <CircularProgressContainer size={size}>
      <UnstyledSpinner
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
