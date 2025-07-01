import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledGrid
        light
        border={false}
      >
        FALSE
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="all"
      >
        ALL
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="x"
      >
        X
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="y"
      >
        Y
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="top"
      >
        TOP
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="bottom"
      >
        BOTTOM
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="left"
      >
        LEFT
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        border="right"
      >
        RIGHT
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
