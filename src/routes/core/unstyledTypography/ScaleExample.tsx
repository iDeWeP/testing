import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledTypography
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledTypography>
      <UnstyledTypography
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
