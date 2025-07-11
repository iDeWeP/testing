import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ResizeExample = () => (
  <ExampleSection title="Resize">
    <ExampleCard>
      <Example resize={false} />
      <Example resize />
    </ExampleCard>
  </ExampleSection>
);
