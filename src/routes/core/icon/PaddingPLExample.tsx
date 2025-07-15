import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPLExample = () => (
  <ExampleSection title="Padding PL">
    <ExampleCard>
      <Example pl="unset" />
      <Example pl="none" />
      <Example pl="xs" />
      <Example pl="sm" />
      <Example pl="md" />
      <Example pl="lg" />
      <Example pl="xl" />
      <Example pl="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example pl="unset" />
      <Example pl="none" />
      <Example pl="xs-xs" />
      <Example pl="sm-sm" />
      <Example pl="md-md" />
      <Example pl="lg-lg" />
      <Example pl="xl-xl" />
      <Example pl="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
