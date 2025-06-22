import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledButton
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
