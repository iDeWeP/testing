import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Box
        variant="text"
        color="primary"
      >
        TEXT
      </Box>
      <Box
        variant="light"
        color="primary"
      >
        LIGHT
      </Box>
      <Box
        variant="surface"
        color="primary"
      >
        SURFACE
      </Box>
      <Box
        variant="solid"
        color="primary"
      >
        SOLID
      </Box>
      <Box
        variant="text"
        color="primary"
        border
      >
        TEXT-BORDER
      </Box>
      <Box
        variant="light"
        color="primary"
        border
      >
        LIGHT-BORDER
      </Box>
      <Box
        variant="surface"
        color="primary"
        border
      >
        SURFACE-BORDER
      </Box>
      <Box
        variant="solid"
        color="primary"
        border
      >
        SOLID-BORDER
      </Box>
    </ExampleCard>
  </ExampleSection>
);
