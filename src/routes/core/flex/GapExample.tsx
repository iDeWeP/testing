import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Flex } from '../../../core/components/Flex/Flex';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <Flex gap="none">
        <Box>None #1</Box>
        <Box>None #2</Box>
        <Box>None #3</Box>
      </Flex>
      <Flex gap="xs">
        <Box>Xs #1</Box>
        <Box>Xs #2</Box>
        <Box>Xs #3</Box>
      </Flex>
      <Flex gap="sm">
        <Box>Sm #1</Box>
        <Box>Sm #2</Box>
        <Box>Sm #3</Box>
      </Flex>
      <Flex gap="md">
        <Box>Md #1</Box>
        <Box>Md #2</Box>
        <Box>Md #3</Box>
      </Flex>
      <Flex gap="lg">
        <Box>Lg #1</Box>
        <Box>Lg #2</Box>
        <Box>Lg #3</Box>
      </Flex>
      <Flex gap="xl">
        <Box>Xl #1</Box>
        <Box>Xl #2</Box>
        <Box>Xl #3</Box>
      </Flex>
      <Flex gap="xxl">
        <Box>Xxl #1</Box>
        <Box>Xxl #2</Box>
        <Box>Xxl #3</Box>
      </Flex>
    </ExampleCard>
  </ExampleSection>
);
