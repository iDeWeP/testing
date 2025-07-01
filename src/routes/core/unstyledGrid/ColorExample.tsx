import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledGrid
        light
        color="surface"
      >
        SURFACE
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="success"
      >
        SUCCESS
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="warning"
      >
        WARNING
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        color="error"
      >
        ERROR
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
