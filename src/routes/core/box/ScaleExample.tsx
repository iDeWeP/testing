import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Box
        spacing="md"
        scale="square"
      >
        SQUARE
      </Box>
      <Box
        spacing="md"
        scale="square-fit"
      >
        SQUARE-FIT
      </Box>
      <Box
        spacing="md"
        scale="square-full"
      >
        SQUARE-FULL
      </Box>
      <Box
        spacing="md"
        scale="rect"
      >
        RECT
      </Box>
      <Box
        spacing="md"
        scale="rect-fit"
      >
        RECT-FIT
      </Box>
      <Box
        spacing="md"
        scale="rect-full"
      >
        RECT-FULL
      </Box>
    </ExampleCard>
  </ExampleSection>
);
