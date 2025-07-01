import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledTypography
        light
        radius="none"
      >
        NONE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="xs"
      >
        XS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="sm"
      >
        SM
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="md"
      >
        MD
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="lg"
      >
        LG
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="xl"
      >
        XL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        radius="full"
      >
        FULL
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
