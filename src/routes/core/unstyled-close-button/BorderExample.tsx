import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Example border="unset" />
      <Example border="none" />
      <Example border="auto" />
      <Example border="set" />
    </ExampleCard>
  </ExampleSection>
);
