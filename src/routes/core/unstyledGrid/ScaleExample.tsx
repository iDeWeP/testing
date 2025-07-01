import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledGrid
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
