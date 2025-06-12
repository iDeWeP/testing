import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Stack } from '../../../core/components/Stack/Stack';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <Stack wrap="nowrap">
        <Box>Nowrap #1</Box>
        <Box>Nowrap #2</Box>
        <Box>Nowrap #3</Box>
      </Stack>
      <Stack wrap="wrap">
        <Box>Wrap #1</Box>
        <Box>Wrap #2</Box>
        <Box>Wrap #3</Box>
      </Stack>
      <Stack wrap="wrap-reverse">
        <Box>Wrap-reverse #1</Box>
        <Box>Wrap-reverse #2</Box>
        <Box>Wrap-reverse #3</Box>
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
