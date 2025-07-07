import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusTRExample = () => (
  <ExampleSection title="Radius TR">
    <ExampleCard>
      <Example rtr="unset" />
      <Example rtr="none" />
      <Example rtr="xs" />
      <Example rtr="sm" />
      <Example rtr="md" />
      <Example rtr="lg" />
      <Example rtr="xl" />
      <Example rtr="xxl" />
      <Example rtr="full" />
    </ExampleCard>
  </ExampleSection>
);
