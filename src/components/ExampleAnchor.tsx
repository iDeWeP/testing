import React, { type ReactNode, forwardRef } from 'react';

import Card from '../lib/idewep/core/components/Card/Card';
import { type CardProps } from '../lib/idewep/core/components/Card/Card.types';

interface ExampleAnchorProps extends CardProps {
  label?: ReactNode;
}

const ExampleAnchor = forwardRef<HTMLDivElement, ExampleAnchorProps>(
  ({ label, children, ...restProps }, forwardedRef) => (
    <Card
      size="md"
      className="relative"
      ref={forwardedRef}
      {...restProps}
    >
      {label ?? 'Anchor'}
      {children}
    </Card>
  )
);

ExampleAnchor.displayName = 'ExampleAnchor';

export default ExampleAnchor;
