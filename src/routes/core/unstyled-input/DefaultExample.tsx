import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example clear />
      <Example
        startDecorator="LEFT"
        endDecorator="RIGHT"
        label="LABEL"
      />
    </ExampleCard>
  </ExampleSection>
);
