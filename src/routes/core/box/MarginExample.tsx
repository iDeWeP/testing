import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Box margin="none">NONE</Box>
      <Box margin="xs">XS</Box>
      <Box margin="sm">SM</Box>
      <Box margin="md">MD</Box>
      <Box margin="lg">LG</Box>
      <Box margin="xl">XL</Box>
      <Box margin="xxl">XXL</Box>
    </ExampleCard>
  </ExampleSection>
);
