import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPYExample = () => (
  <ExampleSection title="Padding PY">
    <ExampleCard>
      <Example py="unset" />
      <Example py="none" />
      <Example py="xs" />
      <Example py="sm" />
      <Example py="md" />
      <Example py="lg" />
      <Example py="xl" />
      <Example py="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example py="unset" />
      <Example py="none" />
      <Example py="xs-xs" />
      <Example py="sm-sm" />
      <Example py="md-md" />
      <Example py="lg-lg" />
      <Example py="xl-xl" />
      <Example py="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
