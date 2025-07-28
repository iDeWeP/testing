import type { ReactNode } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledSpinner } from '../UnstyledSpinner/UnstyledSpinner';
import type { UnstyledCircularProgressProps } from './UnstyledCircularProgress.types';
import { unstyledCircularProgressConfig } from './unstyledCircularProgressConfig';
import { UnstyledCircularProgressContainer } from './UnstyledCircularProgressContainer';
import { UnstyledCircularProgressLabel } from './UnstyledCircularProgressLabel';

export const UnstyledCircularProgress = (
  props: UnstyledCircularProgressProps
): ReactNode => {
  const {
    gap,
    componentsProps,
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
    ...restProps
  } = mergeProps(unstyledCircularProgressConfig.props, props);

  const {
    container: containerProps,
    label: labelProps,
    ...restComponentsProps
  } = componentsProps;

  return (
    <UnstyledCircularProgressContainer
      size={size}
      margin={margin}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      {...containerProps}
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
        componentsProps={restComponentsProps}
        {...restProps}
      />
      {label && children && (
        <UnstyledCircularProgressLabel
          disabled={disabled}
          variant={variant}
          size={size}
          color={color}
          gap={gap}
          {...labelProps}
        >
          {children}
        </UnstyledCircularProgressLabel>
      )}
    </UnstyledCircularProgressContainer>
  );
};
