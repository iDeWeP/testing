import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Flex } from '../../../core/components/Flex/Flex';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Flex border="all">ALL</Flex>
      <Flex border="x">X</Flex>
      <Flex border="y">Y</Flex>
      <Flex border="top">TOP</Flex>
      <Flex border="bottom">BOTTOM</Flex>
      <Flex border="left">LEFT</Flex>
      <Flex border="right">RIGHT</Flex>
    </ExampleCard>
  </ExampleSection>
);
