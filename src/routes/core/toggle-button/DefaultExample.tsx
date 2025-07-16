import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example leftDecorator="LEFT-DECORATOR" />
      <Example rightDecorator="RIGHT-DECORATOR" />
      <Example
        leftDecorator="LEFT-DECORATOR"
        rightDecorator="RIGHT-DECORATOR"
      />
      <Example ripple="none">RIPPLE-NONE</Example>
    </ExampleCard>
  </ExampleSection>
);
