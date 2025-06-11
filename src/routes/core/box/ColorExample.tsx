import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Box color="neutral">NEUTRAL</Box>
      <Box color="primary">PRIMARY</Box>
      <Box color="secondary">SECONDARY</Box>
      <Box color="tertiary">TERTIARY</Box>
      <Box color="success">SUCCESS</Box>
      <Box color="warning">WARNING</Box>
      <Box color="error">ERROR</Box>
    </ExampleCard>
  </ExampleSection>
);
