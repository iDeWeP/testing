import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Box color="neutral">Neutral</Box>
      <Box color="primary">Primary</Box>
      <Box color="secondary">Secondary</Box>
      <Box color="tertiary">Tertiary</Box>
      <Box color="success">Success</Box>
      <Box color="warning">Warning</Box>
      <Box color="error">Error</Box>
    </ExampleCard>
  </ExampleSection>
);
