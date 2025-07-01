import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard align>
      <ExampleUnstyledButton disabled={false}>FALSE</ExampleUnstyledButton>
      <ExampleUnstyledButton disabled>TRUE</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
