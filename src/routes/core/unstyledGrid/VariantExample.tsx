import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledGrid variant="none">NONE</UnstyledGrid>
      <UnstyledGrid variant="text">TEXT</UnstyledGrid>
      <UnstyledGrid variant="plain">PLAIN</UnstyledGrid>
      <UnstyledGrid variant="light">LIGHT</UnstyledGrid>
      <UnstyledGrid variant="surface">SURFACE</UnstyledGrid>
      <UnstyledGrid variant="solid">SOLID</UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledGrid>
      <UnstyledGrid
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledGrid>
      <UnstyledGrid
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledGrid>
      <UnstyledGrid
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledGrid>
      <UnstyledGrid
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
