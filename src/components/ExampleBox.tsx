import type { ReactNode } from 'react';
import { UnstyledBox } from '../core/components/UnstyledBox/UnstyledBox';
import type { UnstyledBoxProps } from '../core/components/UnstyledBox/UnstyledBox.types';

export const ExampleBox = ({
  ...restProps
}: UnstyledBoxProps<'div'>): ReactNode => (
  <UnstyledBox
    color="primary-on"
    {...restProps}
  />
);
