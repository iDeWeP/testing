import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const FocusTrapExample = () => (
  <ExampleSection title="Focus trap">
    <ExampleCard>
      <ExampleUnstyledPopper focusTrap={false}>
        <UnstyledButton>#1 FALSE</UnstyledButton>
        <UnstyledButton>#2 FALSE</UnstyledButton>
        <UnstyledButton>#3 FALSE</UnstyledButton>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper focusTrap>
        <UnstyledButton>#1 TRUE</UnstyledButton>
        <UnstyledButton>#2 TRUE</UnstyledButton>
        <UnstyledButton>#3 TRUE</UnstyledButton>
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
