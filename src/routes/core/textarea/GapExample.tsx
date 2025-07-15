import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard>
      <Example gap="unset" />
      <Example gap="none" />
      <Example gap="xs" />
      <Example gap="sm" />
      <Example gap="md" />
      <Example gap="lg" />
      <Example gap="xl" />
      <Example gap="xxl" />
    </ExampleCard>
  </ExampleSection>
);
