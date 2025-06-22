import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledButton
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        scale="square"
      >
        SQUARE
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
