import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example
        startDecorator="left"
        endDecorator="right"
        label="label"
      />
    </ExampleCard>
  </ExampleSection>
);
