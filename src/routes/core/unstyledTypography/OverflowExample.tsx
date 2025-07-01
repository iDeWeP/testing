import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const OverflowExample = () => (
  <ExampleSection title="Overflow">
    <ExampleCard>
      <ExampleUnstyledTypography overflow="clip">
        CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP
        CLIP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography overflow="truncate">
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography overflow="ellipsis">
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
