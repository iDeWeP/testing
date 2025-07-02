import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OverflowExample = () => (
  <ExampleSection title="Overflow">
    <ExampleCard>
      <Example overflow="clip">
        CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP CLIP
        CLIP
      </Example>
      <Example overflow="truncate">
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
        TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE TRUNCATE
      </Example>
      <Example overflow="ellipsis">
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
        ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS ELLIPSIS
      </Example>
    </ExampleCard>
  </ExampleSection>
);
