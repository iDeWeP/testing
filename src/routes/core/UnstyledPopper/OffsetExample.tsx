import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OffsetExample = () => (
  <ExampleSection title="Offset">
    <ExampleCard>
      <Example offset={16}>16</Example>
    </ExampleCard>
  </ExampleSection>
);
