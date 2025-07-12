import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginLExample = () => (
  <ExampleSection title="Margin L">
    <ExampleCard>
      <Example ml="unset" />
      <Example ml="none" />
      <Example ml="xs" />
      <Example ml="sm" />
      <Example ml="md" />
      <Example ml="lg" />
      <Example ml="xl" />
      <Example ml="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example ml="unset" />
      <Example ml="none" />
      <Example ml="xs-xs" />
      <Example ml="sm-sm" />
      <Example ml="md-md" />
      <Example ml="lg-lg" />
      <Example ml="xl-xl" />
      <Example ml="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
