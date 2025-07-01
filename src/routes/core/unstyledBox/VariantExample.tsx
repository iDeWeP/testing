import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleBox';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledBox variant="none">NONE</ExampleUnstyledBox>
      <ExampleUnstyledBox variant="text">TEXT</ExampleUnstyledBox>
      <ExampleUnstyledBox variant="plain">PLAIN</ExampleUnstyledBox>
      <ExampleUnstyledBox variant="light">LIGHT</ExampleUnstyledBox>
      <ExampleUnstyledBox variant="surface">SURFACE</ExampleUnstyledBox>
      <ExampleUnstyledBox variant="solid">SOLID</ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
