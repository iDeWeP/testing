import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledGrid
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
