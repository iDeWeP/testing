import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const EffectExample = () => (
  <ExampleSection title="Effect">
    <ExampleCard>
      <ExampleUnstyledButton effect="none">NONE</ExampleUnstyledButton>
      <ExampleUnstyledButton effect="shadow">SHADOW</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
