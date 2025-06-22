import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <UnstyledButton>UNSTYLED-BUTTON</UnstyledButton>
      <UnstyledButton leftDecorator="LEFT-DECORATOR">
        UNSTYLED-BUTTON
      </UnstyledButton>
      <UnstyledButton rightDecorator="RIGHT-DECORATOR">
        UNSTYLED-BUTTON
      </UnstyledButton>
      <UnstyledButton
        leftDecorator="LEFT-DECORATOR"
        rightDecorator="RIGHT-DECORATOR"
      >
        UNSTYLED-BUTTON
      </UnstyledButton>
      <UnstyledButton ripple="none">RIPPLE-NONE</UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
