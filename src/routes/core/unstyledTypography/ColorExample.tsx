import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledTypography
        light
        color="surface"
      >
        SURFACE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="success"
      >
        SUCCESS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="warning"
      >
        WARNING
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        color="error"
      >
        ERROR
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
