import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMExample = () => (
  <ExampleSection title="Margin M">
    <ExampleCard>
      <Example m="unset" />
      <Example m="none" />
      <Example m="xs" />
      <Example m="sm" />
      <Example m="md" />
      <Example m="lg" />
      <Example m="xl" />
      <Example m="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example m="unset" />
      <Example m="none" />
      <Example m="xs-xs" />
      <Example m="sm-sm" />
      <Example m="md-md" />
      <Example m="lg-lg" />
      <Example m="xl-xl" />
      <Example m="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
