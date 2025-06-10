import React, { type ReactNode, forwardRef } from 'react';

import Card from '../lib/idewep/core/components/Card/Card';

interface ExampleCardProps {
  stable?: boolean;
  vertical?: boolean;
  stretch?: boolean;
  align?: boolean;
  children: ReactNode;
}

const ExampleCard = forwardRef<HTMLDivElement, ExampleCardProps>(
  (
    {
      stable = false,
      vertical = false,
      stretch = false,
      align = false,
      ...restProps
    },
    forwardedRef
  ) => {
    const classes = `relative bg-light-neutral/25${
      stable ? ' h-[16rem]' : ''
    } flex-wrap`;

    return (
      <Card
        size="md-md"
        radius="xl"
        border
        orientation={vertical ? 'vertical' : 'horizontal'}
        justify="evenly"
        align={align ? 'end' : stretch ? 'stretch' : 'center'}
        gap="md"
        className={classes}
        ref={forwardedRef}
        {...restProps}
      />
    );
  }
);

ExampleCard.displayName = 'ExampleCard';

export default ExampleCard;
