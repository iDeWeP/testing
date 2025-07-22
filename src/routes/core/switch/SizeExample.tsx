import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <Example size="xs" />
      <Example size="sm" />
      <Example size="md" />
      <Example size="lg" />
      <Example size="xl" />
      <Example size="xxl" />
    </ExampleCard>
  </ExampleSection>
);
