import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledTypography
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="md"
      >
        MD
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
