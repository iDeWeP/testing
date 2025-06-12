import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Flex radius="none">NONE</Flex>
      <Flex radius="xs">XS</Flex>
      <Flex radius="sm">SM</Flex>
      <Flex radius="md">MD</Flex>
      <Flex radius="lg">LG</Flex>
      <Flex radius="xl">XL</Flex>
      <Flex radius="full">FULL</Flex>
    </ExampleCard>
  </ExampleSection>
);
