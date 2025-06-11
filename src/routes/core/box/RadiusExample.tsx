import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Box radius="none">NONE</Box>
      <Box radius="xs">XS</Box>
      <Box radius="sm">SM</Box>
      <Box radius="md">MD</Box>
      <Box radius="lg">LG</Box>
      <Box radius="xl">XL</Box>
      <Box radius="full">FULL</Box>
    </ExampleCard>
  </ExampleSection>
);
