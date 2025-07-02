import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledPaper border={false}>FALSE</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="all">ALL</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="x">X</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="y">Y</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="top">TOP</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="bottom">BOTTOM</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="left">LEFT</ExampleUnstyledPaper>
      <ExampleUnstyledPaper border="right">RIGHT</ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
