import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledTypography
        light
        margin="none"
      >
        NONE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="xs"
      >
        XS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="sm"
      >
        SM
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="md"
      >
        MD
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="lg"
      >
        LG
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="xl"
      >
        XL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        margin="xxl"
      >
        XXL
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
