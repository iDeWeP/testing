import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginXExample = () => (
  <ExampleSection title="Margin X">
    <ExampleCard>
      <Example mx="unset" />
      <Example mx="none" />
      <Example mx="xs" />
      <Example mx="sm" />
      <Example mx="md" />
      <Example mx="lg" />
      <Example mx="xl" />
      <Example mx="xxl" />
    </ExampleCard>
  </ExampleSection>
);
