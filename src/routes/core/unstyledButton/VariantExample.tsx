import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledButton } from '../../../core/components/UnstyledButton/UnstyledButton';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledButton variant="none">NONE</UnstyledButton>
      <UnstyledButton variant="text">TEXT</UnstyledButton>
      <UnstyledButton variant="plain">PLAIN</UnstyledButton>
      <UnstyledButton variant="light">LIGHT</UnstyledButton>
      <UnstyledButton variant="surface">SURFACE</UnstyledButton>
      <UnstyledButton variant="solid">SOLID</UnstyledButton>
      <UnstyledButton
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledButton>
      <UnstyledButton
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledButton>
      <UnstyledButton
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledButton>
      <UnstyledButton
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledButton>
      <UnstyledButton
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledButton>
      <UnstyledButton
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
