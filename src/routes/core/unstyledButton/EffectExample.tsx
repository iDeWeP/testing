import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";

export const EffectExample = () => (
  <ExampleSection title="Effect">
    <ExampleCard>
      <UnstyledButton effect="none">NONE</UnstyledButton>
      <UnstyledButton effect="shadow">SHADOW</UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
