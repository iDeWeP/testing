import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleUnstyledTransition
      clear
      color="surface"
    >
      SURFACE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="neutral"
    >
      NEUTRAL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="primary"
    >
      PRIMARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="secondary"
    >
      SECONDARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="tertiary"
    >
      TERTIARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="success"
    >
      SUCCESS
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="warning"
    >
      WARNING
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      clear
      color="error"
    >
      ERROR
    </ExampleUnstyledTransition>
  </ExampleSection>
);
