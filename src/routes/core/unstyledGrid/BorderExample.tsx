import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledGrid border={false}>FALSE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="all">ALL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="x">X</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="y">Y</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="top">TOP</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="bottom">BOTTOM</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="left">LEFT</ExampleUnstyledGrid>
      <ExampleUnstyledGrid border="right">RIGHT</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
