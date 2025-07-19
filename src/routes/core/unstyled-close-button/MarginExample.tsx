import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard>
      <Example margin="unset" />
      <Example margin="none" />
      <Example margin="xs" />
      <Example margin="sm" />
      <Example margin="md" />
      <Example margin="lg" />
      <Example margin="xl" />
      <Example margin="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example margin="unset" />
      <Example margin="none" />
      <Example margin="xs-xs" />
      <Example margin="sm-sm" />
      <Example margin="md-md" />
      <Example margin="lg-lg" />
      <Example margin="xl-xl" />
      <Example margin="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
