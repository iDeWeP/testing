import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Stack spacing="none">NONE</Stack>
      <Stack spacing="xs">XS</Stack>
      <Stack spacing="sm">SM</Stack>
      <Stack spacing="md">MD</Stack>
      <Stack spacing="lg">LG</Stack>
      <Stack spacing="xl">XL</Stack>
    </ExampleCard>
  </ExampleSection>
);
