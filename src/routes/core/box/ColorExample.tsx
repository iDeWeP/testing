import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Box
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Box>
      <Box
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Box>
      <Box
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Box>
      <Box
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Box>
      <Box
        variant="solid"
        color="success"
      >
        SUCCESS
      </Box>
      <Box
        variant="solid"
        color="warning"
      >
        WARNING
      </Box>
      <Box
        variant="solid"
        color="error"
      >
        ERROR
      </Box>
    </ExampleCard>
  </ExampleSection>
);
