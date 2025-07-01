import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledGrid
        light
        radius="none"
      >
        NONE
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="xs"
      >
        XS
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="sm"
      >
        SM
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="md"
      >
        MD
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="lg"
      >
        LG
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="xl"
      >
        XL
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        radius="full"
      >
        FULL
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
