import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const TotalExample = () => (
  <ExampleSection title="Total">
    <ExampleCard>
      <Example total={10}>10</Example>
    </ExampleCard>
  </ExampleSection>
);
