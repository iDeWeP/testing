import { useRef } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const FocusOnCloseExample = () => {
  const ref = useRef(null);

  return (
    <ExampleSection title="Focus on close">
      <ExampleCard>
        <ExampleUnstyledPopover
          focusOnClose={false}
          closeOnEsc
          label="false"
        >
          <UnstyledButton variant="solid">#1 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#2 FALSE</UnstyledButton>
          <UnstyledButton variant="solid">#3 FALSE</UnstyledButton>
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover
          focusOnClose
          closeOnEsc
          label="true"
        >
          <UnstyledButton variant="solid">#1 TRUE</UnstyledButton>
          <UnstyledButton variant="solid">#2 TRUE</UnstyledButton>
          <UnstyledButton variant="solid">#3 TRUE</UnstyledButton>
        </ExampleUnstyledPopover>
        <ExampleUnstyledPopover
          focusOnClose={ref}
          closeOnEsc
          label="ref"
        >
          <UnstyledButton variant="solid">#1 REF</UnstyledButton>
          <UnstyledButton variant="solid">#2 REF</UnstyledButton>
          <UnstyledButton variant="solid">#3 REF</UnstyledButton>
        </ExampleUnstyledPopover>
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
