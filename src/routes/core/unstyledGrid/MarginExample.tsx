import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledGrid
        light
        margin="none"
      >
        NONE
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="xs"
      >
        XS
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="sm"
      >
        SM
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="md"
      >
        MD
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="lg"
      >
        LG
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="xl"
      >
        XL
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid
        light
        margin="xxl"
      >
        XXL
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
