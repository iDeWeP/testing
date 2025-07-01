import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleUnstyledTransition
      light
      color="surface"
    >
      SURFACE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="neutral"
    >
      NEUTRAL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="primary"
    >
      PRIMARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="secondary"
    >
      SECONDARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="tertiary"
    >
      TERTIARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="success"
    >
      SUCCESS
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="warning"
    >
      WARNING
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      color="error"
    >
      ERROR
    </ExampleUnstyledTransition>
  </ExampleSection>
);
