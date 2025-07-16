import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const InvalidExample = () => (
  <ExampleSection title="Invalid">
    <ExampleCard>
      <Example invalid={false} />
      <Example invalid />
    </ExampleCard>
  </ExampleSection>
);
