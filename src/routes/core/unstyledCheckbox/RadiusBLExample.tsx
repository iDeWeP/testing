import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusBLExample = () => (
  <ExampleSection title="Radius BL">
    <ExampleCard>
      <Example rbl="unset" />
      <Example rbl="none" />
      <Example rbl="xs" />
      <Example rbl="sm" />
      <Example rbl="md" />
      <Example rbl="lg" />
      <Example rbl="xl" />
      <Example rbl="xxl" />
      <Example rbl="full" />
    </ExampleCard>
  </ExampleSection>
);
