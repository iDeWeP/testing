import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderLExample = () => (
  <ExampleSection title="Border L">
    <ExampleCard>
      <Example bl="unset" />
      <Example bl="none" />
      <Example bl="set" />
    </ExampleCard>
  </ExampleSection>
);
