import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <Example orientation="row">ROW</Example>
      <Example orientation="col">COL</Example>
    </ExampleCard>
  </ExampleSection>
);
