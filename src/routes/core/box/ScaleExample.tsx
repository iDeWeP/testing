import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Box
        scale="square"
        spacing="md"
      >
        SQUARE
      </Box>
      <Box
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Box>
      <Box
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Box>
      <Box
        scale="rect"
        spacing="md"
      >
        RECT
      </Box>
      <Box
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Box>
      <Box
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Box>
    </ExampleCard>
  </ExampleSection>
);
