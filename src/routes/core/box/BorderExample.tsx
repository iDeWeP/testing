import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Box border="all">ALL</Box>
      <Box border="x">X</Box>
      <Box border="y">Y</Box>
      <Box border="top">TOP</Box>
      <Box border="bottom">BOTTOM</Box>
      <Box border="left">LEFT</Box>
      <Box border="right">RIGHT</Box>
    </ExampleCard>
  </ExampleSection>
);
