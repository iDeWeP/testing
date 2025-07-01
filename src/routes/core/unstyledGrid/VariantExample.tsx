import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledGrid variant="none">NONE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid variant="text">TEXT</ExampleUnstyledGrid>
      <ExampleUnstyledGrid variant="plain">PLAIN</ExampleUnstyledGrid>
      <ExampleUnstyledGrid variant="light">LIGHT</ExampleUnstyledGrid>
      <ExampleUnstyledGrid variant="surface">SURFACE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid variant="solid">SOLID</ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
