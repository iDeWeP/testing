import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Header } from '../../../core/components/Header/Header';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard vertical>
      <Header gap="none">
        <Box>None #1</Box>
        <Box>None #2</Box>
        <Box>None #3</Box>
      </Header>
      <Header gap="xs">
        <Box>Xs #1</Box>
        <Box>Xs #2</Box>
        <Box>Xs #3</Box>
      </Header>
      <Header gap="sm">
        <Box>Sm #1</Box>
        <Box>Sm #2</Box>
        <Box>Sm #3</Box>
      </Header>
      <Header gap="md">
        <Box>Md #1</Box>
        <Box>Md #2</Box>
        <Box>Md #3</Box>
      </Header>
      <Header gap="lg">
        <Box>Lg #1</Box>
        <Box>Lg #2</Box>
        <Box>Lg #3</Box>
      </Header>
      <Header gap="xl">
        <Box>Xl #1</Box>
        <Box>Xl #2</Box>
        <Box>Xl #3</Box>
      </Header>
      <Header gap="xxl">
        <Box>Xxl #1</Box>
        <Box>Xxl #2</Box>
        <Box>Xxl #3</Box>
      </Header>
    </ExampleCard>
  </ExampleSection>
);
