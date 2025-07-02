import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledPaper variant="none">NONE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper variant="text">TEXT</ExampleUnstyledPaper>
      <ExampleUnstyledPaper variant="plain">PLAIN</ExampleUnstyledPaper>
      <ExampleUnstyledPaper variant="light">LIGHT</ExampleUnstyledPaper>
      <ExampleUnstyledPaper variant="surface">SURFACE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper variant="solid">SOLID</ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
