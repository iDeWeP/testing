import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OverlapExample = () => (
  <ExampleSection title="Overlap">
    <ExampleCard>
      <Example overlap="square">SQUARE</Example>
      <Example overlap="circular">CIRCULAR</Example>
      <Example overlap="rounded">ROUNDED</Example>
    </ExampleCard>
  </ExampleSection>
);
