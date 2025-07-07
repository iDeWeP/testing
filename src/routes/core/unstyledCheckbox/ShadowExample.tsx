import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ShadowExample = () => (
  <ExampleSection title="Shadow">
    <ExampleCard>
      <Example shadow="unset" />
      <Example shadow="none" />
      <Example shadow="xs" />
      <Example shadow="sm" />
      <Example shadow="md" />
      <Example shadow="lg" />
      <Example shadow="xl" />
      <Example shadow="xxl" />
    </ExampleCard>
  </ExampleSection>
);
