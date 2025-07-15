import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBRExample = () => (
  <ExampleSection title="Border BR">
    <ExampleCard>
      <Example by="unset" />
      <Example by="none" />
      <Example by="set" />
    </ExampleCard>
  </ExampleSection>
);
