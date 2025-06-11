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
    <ExampleCard align>
      <Box spacing="xs-xs">XS-XS</Box>
      <Box spacing="sm-sm">SM-SM</Box>
      <Box spacing="md-md">MD-MD</Box>
      <Box spacing="lg-lg">LG-LG</Box>
      <Box spacing="xl-xl">XL-XL</Box>
    </ExampleCard>
  </ExampleSection>
);
