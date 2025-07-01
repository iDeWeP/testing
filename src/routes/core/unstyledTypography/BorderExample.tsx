import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="all"
      >
        ALL
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="x"
      >
        X
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="y"
      >
        Y
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="top"
      >
        TOP
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="bottom"
      >
        BOTTOM
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="left"
      >
        LEFT
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        border="right"
      >
        RIGHT
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
