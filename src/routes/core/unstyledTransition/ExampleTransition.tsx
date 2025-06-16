import { useState, useCallback } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { UnstyledTransition } from '../../../core/components/UnstyledTransition/UnstyledTransition';
import type { UnstyledTransitionProps } from '../../../core/components/UnstyledTransition/UnstyledTransition.types';

export const ExampleTransition = ({
  children = 'UNSTYLED-TRANSITION',
  ...restProps
}: UnstyledTransitionProps<'div'>) => {
  const [isIn, setIsIn] = useState(false);

  const handleClick = useCallback(() => setIsIn((isIn) => !isIn), []);

  return (
    <>
      <button onClick={handleClick}>{`Toggle ${children} fade`}</button>
      <ExampleCard>
        <UnstyledTransition
          in={isIn}
          {...restProps}
        >
          {children}
        </UnstyledTransition>
      </ExampleCard>
    </>
  );
};
