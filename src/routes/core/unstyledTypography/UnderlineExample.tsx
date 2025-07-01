import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const UnderlineExample = () => (
  <ExampleSection title="Underline">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        underline="normal"
      >
        NORMAL
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        underline="none"
      >
        NONE
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        underline="hover"
      >
        HOVER
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        underline="always"
      >
        ALWAYS
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
