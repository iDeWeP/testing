import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginTExample = () => (
  <ExampleSection title="Margin T">
    <ExampleCard>
      <Example mt="unset" />
      <Example mt="none" />
      <Example mt="xs" />
      <Example mt="sm" />
      <Example mt="md" />
      <Example mt="lg" />
      <Example mt="xl" />
      <Example mt="xxl" />
    </ExampleCard>
  </ExampleSection>
);
