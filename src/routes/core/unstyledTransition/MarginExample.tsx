import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleUnstyledTransition
      light
      margin="none"
    >
      NONE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="xs"
    >
      XS
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="sm"
    >
      SM
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="md"
    >
      MD
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="lg"
    >
      LG
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="xl"
    >
      XL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      margin="xxl"
    >
      XXL
    </ExampleUnstyledTransition>
  </ExampleSection>
);
