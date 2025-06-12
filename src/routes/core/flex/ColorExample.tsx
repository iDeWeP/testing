import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Flex color="neutral">NEUTRAL</Flex>
      <Flex color="primary">PRIMARY</Flex>
      <Flex color="secondary">SECONDARY</Flex>
      <Flex color="tertiary">TERTIARY</Flex>
      <Flex color="success">SUCCESS</Flex>
      <Flex color="warning">WARNING</Flex>
      <Flex color="error">ERROR</Flex>
    </ExampleCard>
  </ExampleSection>
);
