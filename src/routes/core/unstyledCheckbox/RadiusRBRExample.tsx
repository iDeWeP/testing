import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBRExample = () => (
  <ExampleSection title="Radius RBR">
    <ExampleCard>
      <Example rbr="unset" />
      <Example rbr="none" />
      <Example rbr="xs" />
      <Example rbr="sm" />
      <Example rbr="md" />
      <Example rbr="lg" />
      <Example rbr="xl" />
      <Example rbr="xxl" />
      <Example rbr="full" />
    </ExampleCard>
  </ExampleSection>
);
