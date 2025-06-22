import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledButton
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="md"
      >
        MD
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
