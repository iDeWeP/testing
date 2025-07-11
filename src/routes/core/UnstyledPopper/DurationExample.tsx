import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DurationExample = () => (
  <ExampleSection title="Duration">
    <ExampleCard>
      <Example duration={3000}>3000</Example>
    </ExampleCard>
  </ExampleSection>
);
