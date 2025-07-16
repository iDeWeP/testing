import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example />
      <Example leftDecorator="LEFT-DECORATOR">UNSTYLED-BUTTON</Example>
      <Example rightDecorator="RIGHT-DECORATOR">UNSTYLED-BUTTON</Example>
      <Example
        leftDecorator="LEFT-DECORATOR"
        rightDecorator="RIGHT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </Example>
      <Example ripple="none">RIPPLE-NONE</Example>
    </ExampleCard>
  </ExampleSection>
);
