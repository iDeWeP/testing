import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Box
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Box>
      <Box
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Box>
      <Box
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Box>
      <Box
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Box>
      <Box
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Box>
      <Box
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Box>
      <Box
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Box>
    </ExampleCard>
  </ExampleSection>
);
