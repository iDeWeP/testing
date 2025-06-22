import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExamplePopper } from './ExamplePopper';

export const FocusOnCloseExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on close">
      <ExampleCard>
        <ExamplePopper
          focusOnClose={false}
          closeOnEsc
          label="false"
        >
          <UnstyledButton>#1 FALSE</UnstyledButton>
          <UnstyledButton>#2 FALSE</UnstyledButton>
          <UnstyledButton>#3 FALSE</UnstyledButton>
        </ExamplePopper>
        <ExamplePopper
          focusOnClose
          closeOnEsc
          label="true"
        >
          <UnstyledButton>#1 TRUE</UnstyledButton>
          <UnstyledButton>#2 TRUE</UnstyledButton>
          <UnstyledButton>#3 TRUE</UnstyledButton>
        </ExamplePopper>
        <ExamplePopper
          focusOnClose={ref}
          closeOnEsc
          label="ref"
        >
          <UnstyledButton>#1 REF</UnstyledButton>
          <UnstyledButton>#2 REF</UnstyledButton>
          <UnstyledButton>#3 REF</UnstyledButton>
        </ExamplePopper>
      </ExampleCard>
      <UnstyledButton ref={ref}>FOCUS ON CLOSE</UnstyledButton>
    </ExampleSection>
  );
};
