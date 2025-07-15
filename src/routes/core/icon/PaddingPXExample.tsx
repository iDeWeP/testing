import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPXExample = () => (
  <ExampleSection title="Padding PX">
    <ExampleCard>
      <Example px="unset" />
      <Example px="none" />
      <Example px="xs" />
      <Example px="sm" />
      <Example px="md" />
      <Example px="lg" />
      <Example px="xl" />
      <Example px="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example px="unset" />
      <Example px="none" />
      <Example px="xs-xs" />
      <Example px="sm-sm" />
      <Example px="md-md" />
      <Example px="lg-lg" />
      <Example px="xl-xl" />
      <Example px="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
