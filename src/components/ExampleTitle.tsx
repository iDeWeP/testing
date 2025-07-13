import { Title } from '../core/components/Title/Title';
import type { TitleProps } from '../core/components/Title/Title.types';

export const ExampleTitle = ({ children }: TitleProps<'h1'>) => (
  <Title
    as="h1"
    color="primary"
  >
    {children}
  </Title>
);
