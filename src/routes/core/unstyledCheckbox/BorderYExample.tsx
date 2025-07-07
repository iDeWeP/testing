import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderYExample = () => (
  <ExampleSection title="Border Y">
    <ExampleCard>
      <Example by="unset" />
      <Example by="none" />
      <Example by="set" />
    </ExampleCard>
  </ExampleSection>
);
