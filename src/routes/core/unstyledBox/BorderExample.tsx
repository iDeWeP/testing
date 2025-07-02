import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledBox border={false}>FALSE</ExampleUnstyledBox>
      <ExampleUnstyledBox border="all">ALL</ExampleUnstyledBox>
      <ExampleUnstyledBox border="x">X</ExampleUnstyledBox>
      <ExampleUnstyledBox border="y">Y</ExampleUnstyledBox>
      <ExampleUnstyledBox border="top">TOP</ExampleUnstyledBox>
      <ExampleUnstyledBox border="bottom">BOTTOM</ExampleUnstyledBox>
      <ExampleUnstyledBox border="left">LEFT</ExampleUnstyledBox>
      <ExampleUnstyledBox border="right">RIGHT</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
