import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const TransitionExample = () => (
  <ExampleSection title="Transition">
    <ExampleUnstyledTransition transition="fade">FADE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="grow">GROW</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="grow-fade">GROW-FADE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-top">SLIDE-TOP</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-bottom">
      SLIDE-BOTTOM
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-left">SLIDE-LEFT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-right">SLIDE-RIGHT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-top-fade">
      SLIDE-TOP-FADE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-bottom-fade">
      SLIDE-BOTTOM-FADE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-left-fade">
      SLIDE-LEFT-FADE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="slide-right-fade">
      SLIDE-RIGHT-FADE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="collapse-x">COLLAPSE-X</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="collapse-y">COLLAPSE-Y</ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="collapse-x-fade">
      COLLAPSE-X-FADE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition transition="collapse-y-fade">
      COLLAPSE-Y-FADE
    </ExampleUnstyledTransition>
  </ExampleSection>
);
