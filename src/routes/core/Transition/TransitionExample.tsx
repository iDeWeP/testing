import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const TransitionExample = () => (
  <ExampleSection title="Transition">
    <Example transition="fade">FADE</Example>
    <Example transition="grow">GROW</Example>
    <Example transition="grow-fade">GROW-FADE</Example>
    <Example transition="slide-top">SLIDE-TOP</Example>
    <Example transition="slide-bottom">SLIDE-BOTTOM</Example>
    <Example transition="slide-left">SLIDE-LEFT</Example>
    <Example transition="slide-right">SLIDE-RIGHT</Example>
    <Example transition="slide-top-fade">SLIDE-TOP-FADE</Example>
    <Example transition="slide-bottom-fade">SLIDE-BOTTOM-FADE</Example>
    <Example transition="slide-left-fade">SLIDE-LEFT-FADE</Example>
    <Example transition="slide-right-fade">SLIDE-RIGHT-FADE</Example>
    <Example transition="collapse-x">COLLAPSE-X</Example>
    <Example transition="collapse-y">COLLAPSE-Y</Example>
    <Example transition="collapse-x-fade">COLLAPSE-X-FADE</Example>
    <Example transition="collapse-y-fade">COLLAPSE-Y-FADE</Example>
  </ExampleSection>
);
