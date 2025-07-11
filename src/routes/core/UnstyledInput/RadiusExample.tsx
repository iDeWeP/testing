import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Example radius="unset" />
      <Example radius="none" />
      <Example radius="xs" />
      <Example radius="sm" />
      <Example radius="md" />
      <Example radius="lg" />
      <Example radius="xl" />
      <Example radius="xxl" />
      <Example radius="full" />
    </ExampleCard>
  </ExampleSection>
);
