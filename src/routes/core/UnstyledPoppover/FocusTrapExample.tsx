import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const FocusTrapExample = () => (
  <ExampleSection title="Focus trap">
    <ExampleCard>
      <ExampleUnstyledPopover
        focusTrap={false}
        label="false"
      >
        <UnstyledButton variant="solid">#1 FALSE</UnstyledButton>
        <UnstyledButton variant="solid">#2 FALSE</UnstyledButton>
        <UnstyledButton variant="solid">#3 FALSE</UnstyledButton>
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        focusTrap
        label="true"
      >
        <UnstyledButton variant="solid">#1 TRUE</UnstyledButton>
        <UnstyledButton variant="solid">#2 TRUE</UnstyledButton>
        <UnstyledButton variant="solid">#3 TRUE</UnstyledButton>
      </ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
