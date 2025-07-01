import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleUnstyledTransition radius="none">NONE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="xs">XS</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="sm">SM</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="md">MD</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="lg">LG</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="xl">XL</ExampleUnstyledTransition>
    <ExampleUnstyledTransition radius="full">FULL</ExampleUnstyledTransition>
  </ExampleSection>
);
