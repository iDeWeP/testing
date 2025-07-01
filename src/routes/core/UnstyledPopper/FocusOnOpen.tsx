import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FocusOnOpenExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on open">
      <ExampleCard>
        <ExampleUnstyledPopper
          focusOnOpen={false}
          label="false"
        >
          <UnstyledButton>#1 FALSE</UnstyledButton>
          <UnstyledButton>#2 FALSE</UnstyledButton>
          <UnstyledButton>#3 FALSE</UnstyledButton>
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper
          focusOnOpen
          label="true"
        >
          <UnstyledButton>#1 FOCUS ON OPEN</UnstyledButton>
          <UnstyledButton>#2 TRUE</UnstyledButton>
          <UnstyledButton>#3 TRUE</UnstyledButton>
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper
          focusOnOpen={ref}
          label="ref"
        >
          <UnstyledButton>#1 REF</UnstyledButton>
          <UnstyledButton ref={ref}>#2 FOCUS ON OPEN</UnstyledButton>
          <UnstyledButton>#3 REF</UnstyledButton>
        </ExampleUnstyledPopper>
      </ExampleCard>
    </ExampleSection>
  );
};
