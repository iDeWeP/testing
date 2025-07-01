import { useState, useCallback } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledTransition } from '../../../core/components/UnstyledTransition/UnstyledTransition';
import type { UnstyledTransitionProps } from '../../../core/components/UnstyledTransition/UnstyledTransition.types';

type Props = {
  light?: boolean;
} & UnstyledTransitionProps<'div'>;

export const ExampleUnstyledTransition = ({
  light,
  children = 'UNSTYLED-TRANSITION',
  ...restProps
}: Props) => {
  const [isIn, setIsIn] = useState(false);

  const handleClick = useCallback(() => setIsIn((isIn) => !isIn), []);

  return (
    <>
      <button onClick={handleClick}>{`Toggle ${children}`}</button>
      <ExampleCard>
        <UnstyledTransition
          in={isIn}
          variant={light ? 'light' : 'none'}
          {...restProps}
        >
          <UnstyledBox>{children}</UnstyledBox>
        </UnstyledTransition>
      </ExampleCard>
    </>
  );
};
