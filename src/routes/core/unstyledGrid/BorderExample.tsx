import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledGrid
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="all"
      >
        ALL
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="x"
      >
        X
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="y"
      >
        Y
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="top"
      >
        TOP
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="bottom"
      >
        BOTTOM
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="left"
      >
        LEFT
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        border="right"
      >
        RIGHT
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
