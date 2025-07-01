import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledGrid
        light
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        scale="fit"
      >
        FIT
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        scale="full"
      >
        FULL
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
