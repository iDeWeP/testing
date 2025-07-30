import type { ReactNode } from 'react';
import { Title } from '../core/components/Title/Title';
import type { TitleProps } from '../core/components/Title/Title.types';

export const ExampleTitle = (props: TitleProps<'h1'>): ReactNode => (
  <Title
    as="h1"
    font="xxl"
    color="primary"
    {...props}
  />
);
