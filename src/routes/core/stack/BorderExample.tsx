import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Stack } from '../../../core/components/Stack/Stack';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Stack border="all">ALL</Stack>
      <Stack border="x">X</Stack>
      <Stack border="y">Y</Stack>
      <Stack border="top">TOP</Stack>
      <Stack border="bottom">BOTTOM</Stack>
      <Stack border="left">LEFT</Stack>
      <Stack border="right">RIGHT</Stack>
    </ExampleCard>
  </ExampleSection>
);
