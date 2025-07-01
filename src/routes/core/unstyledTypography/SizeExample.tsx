import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        size="xs"
      >
        XS
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        size="sm"
      >
        SM
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        size="md"
      >
        MD
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        size="lg"
      >
        LG
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        size="xl"
      >
        XL
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        size="xxl"
      >
        XXL
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
