import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ThresholdExample = () => (
  <ExampleSection title="Threshold">
    <ExampleCard>
      <Example threshold={16}>16</Example>
    </ExampleCard>
  </ExampleSection>
);
