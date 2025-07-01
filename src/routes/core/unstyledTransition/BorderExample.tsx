import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleUnstyledTransition border={false}>FALSE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="all">ALL</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="x">X</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="y">Y</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="top">TOP</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="bottom">
      BOTTOM
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="left">LEFT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition border="right">RIGHT</ExampleUnstyledTransition>
  </ExampleSection>
);
