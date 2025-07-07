import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBExample = () => (
  <ExampleSection title="Border B">
    <ExampleCard>
      <Example bb="unset" />
      <Example bb="none" />
      <Example bb="set" />
    </ExampleCard>
  </ExampleSection>
);
