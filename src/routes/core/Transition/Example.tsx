import { type ReactNode, useState, useCallback } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { Transition } from '../../../core/components/Transition/Transition';
import type { TransitionProps } from '../../../core/components/Transition/Transition.types';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

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
      <button onClick={handleClick}>Toggle {children}</button>
      <ExampleCard>
        <Transition
          in={isIn}
          {...restProps}
        >
          <UnstyledBox>{children}</UnstyledBox>
        </Transition>
      </ExampleCard>
    </>
  );
};
