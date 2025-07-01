import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleUnstyledTransition
      light
      radius="none"
    >
      NONE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="xs"
    >
      XS
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="sm"
    >
      SM
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="md"
    >
      MD
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="lg"
    >
      LG
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="xl"
    >
      XL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      radius="full"
    >
      FULL
    </ExampleUnstyledTransition>
  </ExampleSection>
);
