import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledTypography
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="md"
      >
        MD
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
