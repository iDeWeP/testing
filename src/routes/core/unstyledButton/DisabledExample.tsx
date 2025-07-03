import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <Example disabled={false}>FALSE</Example>
      <Example disabled>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
