import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleTransition } from './ExampleTransition';

export const TransitionExample = () => (
  <ExampleSection title="Transition">
    <ExampleTransition transition="fade">FADE</ExampleTransition>
    <ExampleTransition transition="grow">GROW</ExampleTransition>
    <ExampleTransition transition="grow-fade">GROW-FADE</ExampleTransition>
    <ExampleTransition transition="slide-top">SLIDE-TOP</ExampleTransition>
    <ExampleTransition transition="slide-bottom">
      SLIDE-BOTTOM
    </ExampleTransition>
    <ExampleTransition transition="slide-left">SLIDE-LEFT</ExampleTransition>
    <ExampleTransition transition="slide-right">SLIDE-RIGHT</ExampleTransition>
    <ExampleTransition transition="slide-top-fade">
      SLIDE-TOP-FADE
    </ExampleTransition>
    <ExampleTransition transition="slide-bottom-fade">
      SLIDE-BOTTOM-FADE
    </ExampleTransition>
    <ExampleTransition transition="slide-left-fade">
      SLIDE-LEFT-FADE
    </ExampleTransition>
    <ExampleTransition transition="slide-right-fade">
      SLIDE-RIGHT-FADE
    </ExampleTransition>
    <ExampleTransition transition="collapse-x">COLLAPSE-X</ExampleTransition>
    <ExampleTransition transition="collapse-y">COLLAPSE-Y</ExampleTransition>
    <ExampleTransition transition="collapse-x-fade">
      COLLAPSE-X-FADE
    </ExampleTransition>
    <ExampleTransition transition="collapse-y-fade">
      COLLAPSE-Y-FADE
    </ExampleTransition>
  </ExampleSection>
);
