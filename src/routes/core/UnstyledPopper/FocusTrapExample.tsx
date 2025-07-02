import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FocusTrapExample = () => (
  <ExampleSection title="Focus trap">
    <ExampleCard>
      <ExampleUnstyledPopper
        clear
        focusTrap={false}
        label="false"
      >
        <UnstyledButton variant="solid">#1 FALSE</UnstyledButton>
        <UnstyledButton variant="solid">#2 FALSE</UnstyledButton>
        <UnstyledButton variant="solid">#3 FALSE</UnstyledButton>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        clear
        focusTrap
        label="true"
      >
        <UnstyledButton variant="solid">#1 TRUE</UnstyledButton>
        <UnstyledButton variant="solid">#2 TRUE</UnstyledButton>
        <UnstyledButton variant="solid">#3 TRUE</UnstyledButton>
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
