import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { Example } from './Example';

export const FocusOnOpenExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on open">
      <ExampleCard>
        <Example
          focusOnOpen={false}
          label="false"
        >
          <UnstyledButton variant="solid">#1 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#2 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#3 FALSE</UnstyledButton>
        </Example>
        <Example
          focusOnOpen
          label="true"
        >
          <UnstyledButton variant="solid">#1 FOCUS ON OPEN</UnstyledButton>
          <UnstyledButton variant="solid">#2 TRUE</UnstyledButton>
          <UnstyledButton variant="solid">#3 TRUE</UnstyledButton>
        </Example>
        <Example
          focusOnOpen={ref}
          label="ref"
        >
          <UnstyledButton variant="solid">#1 REF</UnstyledButton>
          <UnstyledButton
            ref={ref}
            variant="solid"
          >
            #2 FOCUS ON OPEN
          </UnstyledButton>
          <UnstyledButton variant="solid">#3 REF</UnstyledButton>
        </Example>
      </ExampleCard>
    </ExampleSection>
  );
};
