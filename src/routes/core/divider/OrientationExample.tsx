import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <Example orientation="row"></Example>
    </ExampleCard>
    <ExampleCard height>
      <Example orientation="col"></Example>
    </ExampleCard>
  </ExampleSection>
);
