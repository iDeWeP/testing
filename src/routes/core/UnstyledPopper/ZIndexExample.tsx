import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ZIndexExample = () => (
  <ExampleSection title="Z-index">
    <ExampleCard>
      <Example zIndex={6000}>6000</Example>
    </ExampleCard>
  </ExampleSection>
);
