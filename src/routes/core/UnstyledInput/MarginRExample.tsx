import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginRExample = () => (
  <ExampleSection title="Margin R">
    <ExampleCard>
      <Example mr="unset" />
      <Example mr="none" />
      <Example mr="xs" />
      <Example mr="sm" />
      <Example mr="md" />
      <Example mr="lg" />
      <Example mr="xl" />
      <Example mr="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example mr="unset" />
      <Example mr="none" />
      <Example mr="xs-xs" />
      <Example mr="sm-sm" />
      <Example mr="md-md" />
      <Example mr="lg-lg" />
      <Example mr="xl-xl" />
      <Example mr="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
