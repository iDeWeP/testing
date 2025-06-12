import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Card>Card</Card>
    </ExampleCard>
  </ExampleSection>
);
