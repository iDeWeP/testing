import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Box spacing="none">NONE</Box>
      <Box spacing="xs">XS</Box>
      <Box spacing="sm">SM</Box>
      <Box spacing="md">MD</Box>
      <Box spacing="lg">LG</Box>
      <Box spacing="xl">XL</Box>
    </ExampleCard>
  </ExampleSection>
);
