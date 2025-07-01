import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleUnstyledTransition scale="normal">NORMAL</ExampleUnstyledTransition>
    <ExampleUnstyledTransition scale="fit">FIT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition scale="full">FULL</ExampleUnstyledTransition>
  </ExampleSection>
);
