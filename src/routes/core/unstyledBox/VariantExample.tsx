import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledBox variant="none">NONE</UnstyledBox>
      <UnstyledBox variant="text">TEXT</UnstyledBox>
      <UnstyledBox variant="plain">PLAIN</UnstyledBox>
      <UnstyledBox variant="light">LIGHT</UnstyledBox>
      <UnstyledBox variant="surface">SURFACE</UnstyledBox>
      <UnstyledBox variant="solid">SOLID</UnstyledBox>
      <UnstyledBox
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledBox>
      <UnstyledBox
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledBox>
      <UnstyledBox
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledBox>
      <UnstyledBox
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
