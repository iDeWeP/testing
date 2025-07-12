import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginYExample = () => (
  <ExampleSection title="Margin Y">
    <ExampleCard>
      <Example my="unset" />
      <Example my="none" />
      <Example my="xs" />
      <Example my="sm" />
      <Example my="md" />
      <Example my="lg" />
      <Example my="xl" />
      <Example my="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example my="unset" />
      <Example my="none" />
      <Example my="xs-xs" />
      <Example my="sm-sm" />
      <Example my="md-md" />
      <Example my="lg-lg" />
      <Example my="xl-xl" />
      <Example my="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
