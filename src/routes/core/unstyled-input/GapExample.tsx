import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard>
      <Example gap="unset" />
      <Example gap="none" />
      <Example gap="xs" />
      <Example gap="sm" />
      <Example gap="md" />
      <Example gap="lg" />
      <Example gap="xl" />
      <Example gap="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example gap="unset" />
      <Example gap="none" />
      <Example gap="xs-xs" />
      <Example gap="sm-sm" />
      <Example gap="md-md" />
      <Example gap="lg-lg" />
      <Example gap="xl-xl" />
      <Example gap="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
