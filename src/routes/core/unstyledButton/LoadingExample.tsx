import { ExampleCard } from "../../../components/ExampleCard";
import { ExampleSection } from "../../../components/ExampleSection";
import { UnstyledButton } from "../../../core/components/UnstyledButton/UnstyledButton";


export const LoadingExample = () => (
  <ExampleSection title="Loading">
    <ExampleCard>
      <UnstyledButton
        loading={false}
        variant="light"
      >
        FALSE
      </UnstyledButton>
      <UnstyledButton
        loading
        variant="light"
      >
        TRUE
      </UnstyledButton>
      <UnstyledButton
        loading="left"
        variant="light"
      >
        LEFT
      </UnstyledButton>
      <UnstyledButton
        loading="right"
        variant="light"
      >
        RIGHT
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
