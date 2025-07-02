import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledPopover border={false}>FALSE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="all">ALL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="x">X</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="y">Y</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="top">TOP</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="bottom">BOTTOM</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="left">LEFT</ExampleUnstyledPopover>
      <ExampleUnstyledPopover border="right">RIGHT</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
