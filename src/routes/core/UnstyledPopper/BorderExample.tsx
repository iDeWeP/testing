import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledPopper border={false}>FALSE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="all">ALL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="x">X</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="y">Y</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="top">TOP</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="bottom">BOTTOM</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="left">LEFT</ExampleUnstyledPopper>
      <ExampleUnstyledPopper border="right">RIGHT</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
