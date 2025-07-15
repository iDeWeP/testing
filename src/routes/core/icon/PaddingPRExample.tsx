import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPRExample = () => (
  <ExampleSection title="Padding PR">
    <ExampleCard>
      <Example pr="unset" />
      <Example pr="none" />
      <Example pr="xs" />
      <Example pr="sm" />
      <Example pr="md" />
      <Example pr="lg" />
      <Example pr="xl" />
      <Example pr="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example pr="unset" />
      <Example pr="none" />
      <Example pr="xs-xs" />
      <Example pr="sm-sm" />
      <Example pr="md-md" />
      <Example pr="lg-lg" />
      <Example pr="xl-xl" />
      <Example pr="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
