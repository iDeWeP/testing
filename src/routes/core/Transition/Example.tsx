import { type ReactNode, useState, useCallback } from 'react';
import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleButton } from '../../../components/ExampleButton';
import { ExampleCard } from '../../../components/ExampleCard';
import { Transition } from '../../../core/components/Transition/Transition';
import type { TransitionProps } from '../../../core/components/Transition/Transition.types';

export const Example = ({
  children = 'TRANSITION',
  ...restProps
}: TransitionProps<'div'>): ReactNode => {
  const [isIn, setIsIn] = useState(false);

  const handleClick = useCallback(
    (): void => setIsIn((isIn): boolean => !isIn),
    []
  );

  return (
    <>
      <ExampleButton onClick={handleClick}>Toggle {children}</ExampleButton>
      <ExampleCard>
        <Transition
          in={isIn}
          {...restProps}
        >
          <ExampleBox>{children}</ExampleBox>
        </Transition>
      </ExampleCard>
    </>
  );
};
