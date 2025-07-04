import { useState, useCallback } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { Transition } from '../../../core/components/Transition/Transition';
import type { TransitionProps } from '../../../core/components/Transition/Transition.types';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const Example = ({
  children = 'UNSTYLED-TRANSITION',
  ...restProps
}: TransitionProps<'div'>) => {
  const [isIn, setIsIn] = useState(false);

  const handleClick = useCallback(() => setIsIn((isIn) => !isIn), []);

  return (
    <>
      <button onClick={handleClick}>{`Toggle ${children}`}</button>
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
