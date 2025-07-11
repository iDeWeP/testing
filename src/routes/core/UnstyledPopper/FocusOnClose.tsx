import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { Example } from './Example';

export const FocusOnCloseExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on close">
      <ExampleCard>
        <Example
          focusOnClose={false}
          closeOnEsc
          label="false"
        >
          <UnstyledButton variant="solid">#1 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#2 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#3 FALSE</UnstyledButton>
        </Example>
        <Example
          focusOnClose
          closeOnEsc
          label="true"
        >
          <UnstyledButton variant="solid">#1 TRUE</UnstyledButton>
          <UnstyledButton variant="solid">#2 TRUE</UnstyledButton>
          <UnstyledButton variant="solid">#3 TRUE</UnstyledButton>
        </Example>
        <Example
          focusOnClose={ref}
          closeOnEsc
          label="ref"
        >
          <UnstyledButton variant="solid">#1 REF</UnstyledButton>
          <UnstyledButton variant="solid">#2 REF</UnstyledButton>
          <UnstyledButton variant="solid">#3 REF</UnstyledButton>
        </Example>
      </ExampleCard>
      <UnstyledButton
        ref={ref}
        variant="solid"
      >
        FOCUS ON CLOSE
      </UnstyledButton>
    </ExampleSection>
  );
};
