import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ValueExample = () => (
  <ExampleSection title="Value">
    <ExampleCard>
      <Example value={50}>50</Example>
    </ExampleCard>
  </ExampleSection>
);
