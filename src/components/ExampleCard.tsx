import type { ReactNode } from 'react';
import { Card } from '../core/components/Card/Card';

type Props = {
  stable?: boolean;
  vertical?: boolean;
  stretch?: boolean;
  align?: boolean;
  children: ReactNode;
};

export const ExampleCard = ({
  stable = false,
  vertical = false,
  stretch = false,
  align = false,
  ...restProps
}: Props) => {
  const className = `relative bg-disabled-50 ${stable ? 'h-[16rem]' : ''}`;

  return (
    <Card
      direction={vertical ? 'col' : 'row'}
      wrap="wrap"
      justify="evenly"
      size="md-md"
      align={align ? 'end' : stretch ? 'stretch' : 'center'}
      gap="md"
      variant="light"
      border
      radius="xl"
      className={className}
      {...restProps}
    />
  );
};
