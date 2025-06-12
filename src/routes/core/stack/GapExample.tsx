import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Stack } from '../../../core/components/Stack/Stack';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <Stack gap="none">
        <Box>None #1</Box>
        <Box>None #2</Box>
        <Box>None #3</Box>
      </Stack>
      <Stack gap="xs">
        <Box>Xs #1</Box>
        <Box>Xs #2</Box>
        <Box>Xs #3</Box>
      </Stack>
      <Stack gap="sm">
        <Box>Sm #1</Box>
        <Box>Sm #2</Box>
        <Box>Sm #3</Box>
      </Stack>
      <Stack gap="md">
        <Box>Md #1</Box>
        <Box>Md #2</Box>
        <Box>Md #3</Box>
      </Stack>
      <Stack gap="lg">
        <Box>Lg #1</Box>
        <Box>Lg #2</Box>
        <Box>Lg #3</Box>
      </Stack>
      <Stack gap="xl">
        <Box>Xl #1</Box>
        <Box>Xl #2</Box>
        <Box>Xl #3</Box>
      </Stack>
      <Stack gap="xxl">
        <Box>Xxl #1</Box>
        <Box>Xxl #2</Box>
        <Box>Xxl #3</Box>
      </Stack>
    </ExampleCard>
  </ExampleSection>
);
