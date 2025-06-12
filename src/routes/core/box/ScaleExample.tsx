import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Box scale="square">SQUARE</Box>
      <Box scale="square-fit">SQUARE-FIT</Box>
      <Box scale="square-full">SQUARE-FULL</Box>
      <Box scale="rect">RECT</Box>
      <Box scale="rect-fit">RECT-FIT</Box>
      <Box scale="rect-full">RECT-FULL</Box>
    </ExampleCard>
  </ExampleSection>
);
