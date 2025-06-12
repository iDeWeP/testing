import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Stack margin="none">NONE</Stack>
      <Stack margin="xs">XS</Stack>
      <Stack margin="sm">SM</Stack>
      <Stack margin="md">MD</Stack>
      <Stack margin="lg">LG</Stack>
      <Stack margin="xl">XL</Stack>
      <Stack margin="xxl">XXL</Stack>
    </ExampleCard>
  </ExampleSection>
);
