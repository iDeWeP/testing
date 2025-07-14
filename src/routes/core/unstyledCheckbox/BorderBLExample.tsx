import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBLExample = () => (
  <ExampleSection title="Border BL">
    <ExampleCard>
      <Example bl="unset" />
      <Example bl="none" />
      <Example bl="set" />
    </ExampleCard>
  </ExampleSection>
);
