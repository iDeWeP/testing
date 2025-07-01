import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledTypography
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
