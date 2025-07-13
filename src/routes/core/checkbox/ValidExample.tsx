import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ValidExample = () => (
  <ExampleSection title="Valid">
    <ExampleCard>
      <Example valid={false} />
      <Example valid />
    </ExampleCard>
  </ExampleSection>
);
