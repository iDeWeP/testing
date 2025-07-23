import type { ReactNode } from 'react';
import { useMergeProps } from '../../hooks/use-merge-props/use-merge-props';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { CircularProgressProps } from './CircularProgress.types';
import { circularProgressConfig } from './circularProgressConfig';
import { CircularProgressContainer } from './CircularProgressContainer';
import { CircularProgressLabel } from './CircularProgressLabel';

export const CircularProgress = (props: CircularProgressProps): ReactNode => {
  const {
    label,
    children,
    disabled = false,
    variant,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    color,
    gap,
    ...restProps
  } = useMergeProps('circularProgress', circularProgressConfig.props, props);

  return (
    <CircularProgressContainer
      size={size}
      margin={margin}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
    >
      <UnstyledSpinner
        disabled={disabled}
        variant={variant}
        size={size}
        margin="unset"
        m="unset"
        mx="unset"
        my="unset"
        mt="unset"
        mb="unset"
        ml="unset"
        mr="unset"
        color={color}
        {...restProps}
      />
      {label && children && (
        <CircularProgressLabel
          disabled={disabled}
          variant={variant}
          size={size}
          color={color}
          gap={gap}
        >
          {children}
        </CircularProgressLabel>
      )}
    </CircularProgressContainer>
  );
};
