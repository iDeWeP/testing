import type { ReactNode } from 'react';
import { Title } from '../../../core/components/Title/Title';
import type { TitleProps } from '../../../core/components/Title/Title.types';

export const Example = ({
  children = 'TITLE',
  ...restProps
}: TitleProps<'h3'>): ReactNode => <Title {...restProps}>{children}</Title>;
