import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Box radius="none">None</Box>
      <Box radius="xs">Xs</Box>
      <Box radius="sm">Sm</Box>
      <Box radius="md">Md</Box>
      <Box radius="lg">Lg</Box>
      <Box radius="xl">Xl</Box>
      <Box radius="full">Full</Box>
    </ExampleCard>
  </ExampleSection>
);
