import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledButton
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="md"
      >
        MD
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
