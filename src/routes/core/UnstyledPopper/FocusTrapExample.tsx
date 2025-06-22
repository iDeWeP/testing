import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';
import { ExamplePopper } from './ExamplePopper';

export const FocusTrapExample = () => (
  <ExampleSection title="Focus trap">
    <ExampleCard>
      <ExamplePopper focusTrap={false}>
        <UnstyledButton>#1 FALSE</UnstyledButton>
        <UnstyledButton>#2 FALSE</UnstyledButton>
        <UnstyledButton>#3 FALSE</UnstyledButton>
      </ExamplePopper>
      <ExamplePopper focusTrap>
        <UnstyledButton>#1 TRUE</UnstyledButton>
        <UnstyledButton>#2 TRUE</UnstyledButton>
        <UnstyledButton>#3 TRUE</UnstyledButton>
      </ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
