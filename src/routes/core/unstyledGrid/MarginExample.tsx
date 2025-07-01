import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledGrid
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="md"
      >
        MD
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledGrid>
      <UnstyledGrid
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
