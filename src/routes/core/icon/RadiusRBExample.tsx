import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBExample = () => (
  <ExampleSection title="Radiu RB">
    <ExampleCard>
      <Example rb="unset" />
      <Example rb="none" />
      <Example rb="xs" />
      <Example rb="sm" />
      <Example rb="md" />
      <Example rb="lg" />
      <Example rb="xl" />
      <Example rb="xxl" />
      <Example rb="full" />
    </ExampleCard>
  </ExampleSection>
);
