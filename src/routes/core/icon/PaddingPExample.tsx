import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPExample = () => (
  <ExampleSection title="Padding P">
    <ExampleCard>
      <Example p="unset" />
      <Example p="none" />
      <Example p="xs" />
      <Example p="sm" />
      <Example p="md" />
      <Example p="lg" />
      <Example p="xl" />
      <Example p="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example p="unset" />
      <Example p="none" />
      <Example p="xs-xs" />
      <Example p="sm-sm" />
      <Example p="md-md" />
      <Example p="lg-lg" />
      <Example p="xl-xl" />
      <Example p="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
