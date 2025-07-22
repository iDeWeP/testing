import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example startDecorator="START-DECORATOR" />
      <Example endDecorator="END-DECORATOR" />
      <Example
        startDecorator="START-DECORATOR"
        endDecorator="END-DECORATOR"
      />
      <Example ripple="none">RIPPLE-NONE</Example>
    </ExampleCard>
  </ExampleSection>
);
