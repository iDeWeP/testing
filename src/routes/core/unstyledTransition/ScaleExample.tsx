import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleUnstyledTransition
      light
      scale="normal"
    >
      NORMAL
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      scale="fit"
    >
      FIT
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      light
      scale="full"
    >
      FULL
    </ExampleUnstyledTransition>
  </ExampleSection>
);
