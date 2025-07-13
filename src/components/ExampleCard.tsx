import { Card } from '../core/components/Card/Card';
import type { CardProps } from '../core/components/Card/Card.types';

type Props = {
  col?: boolean;
} & CardProps<'div'>;

export const ExampleCard = ({ col, ...restProps }: Props) => {
  const className = `relative bg-disabled-100 flex-wrap justify-evenly items-center
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
