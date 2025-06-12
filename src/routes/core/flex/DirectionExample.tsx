import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Flex } from '../../../core/components/Flex/Flex';

export const DirectionExample = () => (
  <ExampleSection title="Direction">
    <ExampleCard vertical>
      <Flex direction="row">
        <Box>Row #1</Box>
        <Box>Row #2</Box>
        <Box>Row #3</Box>
      </Flex>
      <Flex direction="col">
        <Box>Col #1</Box>
        <Box>Col #2</Box>
        <Box>Col #3</Box>
      </Flex>
      <Flex direction="row-reverse">
        <Box>Row-reverse #1</Box>
        <Box>Row-reverse #2</Box>
        <Box>Row-reverse #3</Box>
      </Flex>
      <Flex direction="col-reverse">
        <Box>Col-reverse #1</Box>
        <Box>Col-reverse #2</Box>
        <Box>Col-reverse #3</Box>
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
