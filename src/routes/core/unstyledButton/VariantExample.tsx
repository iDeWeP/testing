import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledButton variant="none">NONE</ExampleUnstyledButton>
      <ExampleUnstyledButton variant="text">TEXT</ExampleUnstyledButton>
      <ExampleUnstyledButton variant="plain">PLAIN</ExampleUnstyledButton>
      <ExampleUnstyledButton variant="light">LIGHT</ExampleUnstyledButton>
      <ExampleUnstyledButton variant="surface">SURFACE</ExampleUnstyledButton>
      <ExampleUnstyledButton variant="solid">SOLID</ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
