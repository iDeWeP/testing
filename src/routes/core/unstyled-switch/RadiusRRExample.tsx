import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRRExample = () => (
  <ExampleSection title="Radius RR">
    <ExampleCard>
      <Example rr="unset" />
      <Example rr="none" />
      <Example rr="xs" />
      <Example rr="sm" />
      <Example rr="md" />
      <Example rr="lg" />
      <Example rr="xl" />
      <Example rr="xxl" />
      <Example rr="full" />
    </ExampleCard>
  </ExampleSection>
);
