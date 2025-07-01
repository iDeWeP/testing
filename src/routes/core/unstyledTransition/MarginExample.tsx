import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleUnstyledTransition margin="none">NONE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="xs">XS</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="sm">SM</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="md">MD</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="lg">LG</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="xl">XL</ExampleUnstyledTransition>
    <ExampleUnstyledTransition margin="xxl">XXL</ExampleUnstyledTransition>
  </ExampleSection>
);
