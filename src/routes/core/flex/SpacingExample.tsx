import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Flex spacing="none">NONE</Flex>
      <Flex spacing="xs">XS</Flex>
      <Flex spacing="sm">SM</Flex>
      <Flex spacing="md">MD</Flex>
      <Flex spacing="lg">LG</Flex>
      <Flex spacing="xl">XL</Flex>
    </ExampleCard>
  </ExampleSection>
);
