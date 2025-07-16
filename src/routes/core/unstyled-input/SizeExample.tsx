import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <Example size="sm" />
      <Example size="md" />
      <Example size="lg" />
    </ExampleCard>
  </ExampleSection>
);
