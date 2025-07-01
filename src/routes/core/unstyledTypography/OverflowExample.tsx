import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const OverflowExample = () => (
  <ExampleSection title="Overflow">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        overflow="clip"
      >
        CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP
        CLIP
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        overflow="truncate"
      >
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        overflow="ellipsis"
      >
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
