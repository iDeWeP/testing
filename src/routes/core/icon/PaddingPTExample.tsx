import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPTExample = () => (
  <ExampleSection title="Padding PT">
    <ExampleCard>
      <Example pt="unset" />
      <Example pt="none" />
      <Example pt="xs" />
      <Example pt="sm" />
      <Example pt="md" />
      <Example pt="lg" />
      <Example pt="xl" />
      <Example pt="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example pt="unset" />
      <Example pt="none" />
      <Example pt="xs-xs" />
      <Example pt="sm-sm" />
      <Example pt="md-md" />
      <Example pt="lg-lg" />
      <Example pt="xl-xl" />
      <Example pt="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
