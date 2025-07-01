import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledGrid
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="md"
      >
        MD
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
