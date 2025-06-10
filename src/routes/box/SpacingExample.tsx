import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Box spacing="none">None</Box>
      <Box spacing="xs">Xs</Box>
      <Box spacing="sm">Sm</Box>
      <Box spacing="md">Md</Box>
      <Box spacing="lg">Lg</Box>
      <Box spacing="xl">Xl</Box>
    </ExampleCard>
    <ExampleCard align>
      <Box spacing="xs-xs">Xs-xs</Box>
      <Box spacing="sm-sm">Sm-sm</Box>
      <Box spacing="md-md">Md-md</Box>
      <Box spacing="lg-lg">Lg-lg</Box>
      <Box spacing="xl-xl">Xl-xl</Box>
    </ExampleCard>
  </ExampleSection>
);
