import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginBExample = () => (
  <ExampleSection title="Margin B">
    <ExampleCard>
      <Example mb="unset" />
      <Example mb="none" />
      <Example mb="xs" />
      <Example mb="sm" />
      <Example mb="md" />
      <Example mb="lg" />
      <Example mb="xl" />
      <Example mb="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example mb="unset" />
      <Example mb="none" />
      <Example mb="xs-xs" />
      <Example mb="sm-sm" />
      <Example mb="md-md" />
      <Example mb="lg-lg" />
      <Example mb="xl-xl" />
      <Example mb="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
