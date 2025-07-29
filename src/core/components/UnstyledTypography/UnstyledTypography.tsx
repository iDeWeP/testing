import type { ElementType, ReactNode } from 'react';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledBox } from '../UnstyledBox/UnstyledBox';
import type { UnstyledTypographyProps } from './UnstyledTypography.types';
import { unstyledTypographyConfig } from './unstyledTypographyConfig';

export const UnstyledTypography = <E extends ElementType>(
  props: UnstyledTypographyProps<E>
): ReactNode => {
  const mergedProps = mergeProps(unstyledTypographyConfig.props, props);

  return (
    <UnstyledBox
      gx="unset"
      gy="unset"
      {...mergedProps}
    />
  );
};
