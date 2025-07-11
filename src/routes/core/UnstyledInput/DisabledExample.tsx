import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <Example disabled={false} />
      <Example disabled />
    </ExampleCard>
  </ExampleSection>
);
