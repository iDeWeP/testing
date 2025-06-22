import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <UnstyledButton
        variant="light"
        size="xs"
      >
        XS
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        size="sm"
      >
        SM
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        size="md"
      >
        MD
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        size="lg"
      >
        LG
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        size="xl"
      >
        XL
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        size="xxl"
      >
        XXL
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
