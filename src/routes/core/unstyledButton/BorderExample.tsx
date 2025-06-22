import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledButton
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledButton>
      <UnstyledButton
        variant="none"
        border
      >
        TRUE
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
