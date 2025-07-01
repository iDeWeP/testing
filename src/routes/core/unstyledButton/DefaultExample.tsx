import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledButton />
      <ExampleUnstyledButton leftDecorator="LEFT-DECORATOR">
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton rightDecorator="RIGHT-DECORATOR">
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        leftDecorator="LEFT-DECORATOR"
        rightDecorator="RIGHT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton ripple="none">RIPPLE-NONE</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
