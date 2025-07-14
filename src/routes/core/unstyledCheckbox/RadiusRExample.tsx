import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRExample = () => (
  <ExampleSection title="Radius R">
    <ExampleCard>
      <Example r="unset" />
      <Example r="none" />
      <Example r="xs" />
      <Example r="sm" />
      <Example r="md" />
      <Example r="lg" />
      <Example r="xl" />
      <Example r="xxl" />
      <Example r="full" />
    </ExampleCard>
  </ExampleSection>
);
