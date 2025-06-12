import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Flex margin="none">NONE</Flex>
      <Flex margin="xs">XS</Flex>
      <Flex margin="sm">SM</Flex>
      <Flex margin="md">MD</Flex>
      <Flex margin="lg">LG</Flex>
      <Flex margin="xl">XL</Flex>
      <Flex margin="xxl">XXL</Flex>
    </ExampleCard>
  </ExampleSection>
);
