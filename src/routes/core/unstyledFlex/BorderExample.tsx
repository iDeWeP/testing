import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledFlex border={false}>FALSE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="all">ALL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="x">X</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="y">Y</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="top">TOP</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="bottom">BOTTOM</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="left">LEFT</ExampleUnstyledFlex>
      <ExampleUnstyledFlex border="right">RIGHT</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
