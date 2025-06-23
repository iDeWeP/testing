import type { ReactNode } from 'react';
import { Card } from '../core/components/Card/Card';

type Props = {
  title: string;
  children: ReactNode;
};

export const ExampleSection = ({ title, children }: Props) => {
  const id = title
    .toLowerCase()
    .trim()
    .replace(/\s{2,}/, ' ');

  return (
    <Card
      gap="md"
      aria-labelledby={id}
    >
      <h1 id={id}>{title}</h1>
      {children}
    </Card>
  );
};
