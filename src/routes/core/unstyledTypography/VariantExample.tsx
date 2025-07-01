import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledTypography variant="none">NONE</ExampleUnstyledTypography>
      <ExampleUnstyledTypography variant="text">TEXT</ExampleUnstyledTypography>
      <ExampleUnstyledTypography variant="plain">
        PLAIN
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography variant="light">
        LIGHT
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography variant="surface">
        SURFACE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography variant="solid">
        SOLID
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
