import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard align>
      <UnstyledButton disabled={false}>FALSE</UnstyledButton>
      <UnstyledButton disabled>TRUE</UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
