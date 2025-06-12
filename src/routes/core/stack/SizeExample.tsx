import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Stack size="none">NONE</Stack>
      <Stack size="xs">XS</Stack>
      <Stack size="sm">SM</Stack>
      <Stack size="md">MD</Stack>
      <Stack size="lg">LG</Stack>
      <Stack size="xl">XL</Stack>
      <Stack size="xxl">XXL</Stack>
    </ExampleCard>
    <ExampleCard align>
      <Stack size="xs-xs">XS-XS</Stack>
      <Stack size="sm-sm">SM-SM</Stack>
      <Stack size="md-md">MD-MD</Stack>
      <Stack size="lg-lg">LG-LG</Stack>
      <Stack size="xl-xl">XL-XL</Stack>
      <Stack size="xxl-xxl">XXL-XXL</Stack>
    </ExampleCard>
  </ExampleSection>
);
