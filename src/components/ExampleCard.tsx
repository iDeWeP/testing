import type { ReactNode } from 'react';

type Props = {
  col?: boolean;
  children?: ReactNode;
};

export const ExampleCard = ({ col, ...restProps }: Props) => {
  const className = `relative bg-disabled-100 flex flex-wrap justify-evenly items-center ${
    col ? 'flex-col' : ''
  }`;

  return (
    <div
      className={className}
      {...restProps}
    />
  );
};
