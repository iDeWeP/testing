import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FocusOnCloseExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on close">
      <ExampleCard>
        <ExampleUnstyledPopper
          focusOnClose={false}
          closeOnEsc
          label="false"
        >
          <UnstyledButton>#1 FALSE</UnstyledButton>
          <UnstyledButton>#2 FALSE</UnstyledButton>
          <UnstyledButton>#3 FALSE</UnstyledButton>
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper
          focusOnClose
          closeOnEsc
          label="true"
        >
          <UnstyledButton>#1 TRUE</UnstyledButton>
          <UnstyledButton>#2 TRUE</UnstyledButton>
          <UnstyledButton>#3 TRUE</UnstyledButton>
        </ExampleUnstyledPopper>
        <ExampleUnstyledPopper
          focusOnClose={ref}
          closeOnEsc
          label="ref"
        >
          <UnstyledButton>#1 REF</UnstyledButton>
          <UnstyledButton>#2 REF</UnstyledButton>
          <UnstyledButton>#3 REF</UnstyledButton>
        </ExampleUnstyledPopper>
      </ExampleCard>
      <UnstyledButton ref={ref}>FOCUS ON CLOSE</UnstyledButton>
    </ExampleSection>
  );
};
