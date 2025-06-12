import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Footer } from '../../../core/components/Footer/Footer';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <Footer gap="none">
        <Box>None #1</Box>
        <Box>None #2</Box>
        <Box>None #3</Box>
      </Footer>
      <Footer gap="xs">
        <Box>Xs #1</Box>
        <Box>Xs #2</Box>
        <Box>Xs #3</Box>
      </Footer>
      <Footer gap="sm">
        <Box>Sm #1</Box>
        <Box>Sm #2</Box>
        <Box>Sm #3</Box>
      </Footer>
      <Footer gap="md">
        <Box>Md #1</Box>
        <Box>Md #2</Box>
        <Box>Md #3</Box>
      </Footer>
      <Footer gap="lg">
        <Box>Lg #1</Box>
        <Box>Lg #2</Box>
        <Box>Lg #3</Box>
      </Footer>
      <Footer gap="xl">
        <Box>Xl #1</Box>
        <Box>Xl #2</Box>
        <Box>Xl #3</Box>
      </Footer>
      <Footer gap="xxl">
        <Box>Xxl #1</Box>
        <Box>Xxl #2</Box>
        <Box>Xxl #3</Box>
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
