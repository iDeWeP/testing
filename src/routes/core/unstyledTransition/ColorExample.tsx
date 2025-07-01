import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleUnstyledTransition color="surface">
      SURFACE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="neutral">
      NEUTRAL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="primary">
      PRIMARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="secondary">
      SECONDARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="tertiary">
      TERTIARY
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="success">
      SUCCESS
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="warning">
      WARNING
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition color="error">ERROR</ExampleUnstyledTransition>
  </ExampleSection>
);
