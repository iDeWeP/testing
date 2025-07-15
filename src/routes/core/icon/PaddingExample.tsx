import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingExample = () => (
  <ExampleSection title="Padding">
    <ExampleCard>
      <Example padding="unset" />
      <Example padding="none" />
      <Example padding="xs" />
      <Example padding="sm" />
      <Example padding="md" />
      <Example padding="lg" />
      <Example padding="xl" />
      <Example padding="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example padding="unset" />
      <Example padding="none" />
      <Example padding="xs-xs" />
      <Example padding="sm-sm" />
      <Example padding="md-md" />
      <Example padding="lg-lg" />
      <Example padding="xl-xl" />
      <Example padding="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
