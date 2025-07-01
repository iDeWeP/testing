import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const OverflowExample = () => (
  <ExampleSection title="Overflow">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        overflow="clip"
      >
        CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP
        CLIP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        overflow="truncate"
      >
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        overflow="ellipsis"
      >
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
