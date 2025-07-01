import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledButton clear />
      <ExampleUnstyledButton
        clear
        leftDecorator="LEFT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        clear
        rightDecorator="RIGHT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        clear
        leftDecorator="LEFT-DECORATOR"
        rightDecorator="RIGHT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        clear
        ripple="none"
      >
        RIPPLE-NONE
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
