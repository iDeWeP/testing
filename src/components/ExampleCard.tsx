import { Card } from '../core/components/Card/Card';
import type { CardProps } from '../core/components/Card/Card.types';

type Props = {
  col?: boolean;
  height?: boolean;
} & CardProps<'div'>;

export const ExampleCard = ({ col, height, ...restProps }: Props) => {
  const className = `relative ${
    height ? 'h-[100px]' : ''
  } bg-disabled-100 flex-wrap justify-evenly items-center
  }`;

  return (
    <Card
      orientation={col ? 'col' : 'row'}
      color="unset"
      className={className}
      {...restProps}
    />
  );
};
