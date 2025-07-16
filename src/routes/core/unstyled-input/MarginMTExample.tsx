import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMTExample = () => (
  <ExampleSection title="Margin MT">
    <ExampleCard>
      <Example mt="unset" />
      <Example mt="none" />
      <Example mt="xs" />
      <Example mt="sm" />
      <Example mt="md" />
      <Example mt="lg" />
      <Example mt="xl" />
      <Example mt="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example mt="unset" />
      <Example mt="none" />
      <Example mt="xs-xs" />
      <Example mt="sm-sm" />
      <Example mt="md-md" />
      <Example mt="lg-lg" />
      <Example mt="xl-xl" />
      <Example mt="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
