import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PositionExample = () => (
  <ExampleSection title="Position">
    <ExampleCard>
      <Example position="absolute">ABSOLUTE</Example>
      <Example position="fixed">FIXED</Example>
    </ExampleCard>
  </ExampleSection>
);
