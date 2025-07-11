import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginRExample = () => (
  <ExampleSection title="Margin R">
    <ExampleCard>
      <Example mr="unset" />
      <Example mr="none" />
      <Example mr="xs" />
      <Example mr="sm" />
      <Example mr="md" />
      <Example mr="lg" />
      <Example mr="xl" />
      <Example mr="xxl" />
    </ExampleCard>
  </ExampleSection>
);
