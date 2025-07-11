import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example
        as="textarea"
        variant="outlined"
        size="lg"
        leftDecorator="left"
        rightDecorator="right"
        label="label"
      />
    </ExampleCard>
  </ExampleSection>
);
