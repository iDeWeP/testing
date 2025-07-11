import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginLExample = () => (
  <ExampleSection title="Margin L">
    <ExampleCard>
      <Example ml="unset" />
      <Example ml="none" />
      <Example ml="xs" />
      <Example ml="sm" />
      <Example ml="md" />
      <Example ml="lg" />
      <Example ml="xl" />
      <Example ml="xxl" />
    </ExampleCard>
  </ExampleSection>
);
