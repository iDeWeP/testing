import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const TransitionExample = () => (
  <ExampleSection title="Transition">
    <Example transition="fade">FADE</Example>
    <Example transition="grow">GROW</Example>
    <Example transition="grow-fade">GROW-FADE</Example>
  </ExampleSection>
);
