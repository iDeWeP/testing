import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledTypography variant="none">NONE</UnstyledTypography>
      <UnstyledTypography variant="text">TEXT</UnstyledTypography>
      <UnstyledTypography variant="plain">PLAIN</UnstyledTypography>
      <UnstyledTypography variant="light">LIGHT</UnstyledTypography>
      <UnstyledTypography variant="surface">SURFACE</UnstyledTypography>
      <UnstyledTypography variant="solid">SOLID</UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledTypography>
      <UnstyledTypography
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledTypography>
      <UnstyledTypography
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledTypography>
      <UnstyledTypography
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledTypography>
      <UnstyledTypography
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
