import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTransition } from './ExampleUnstyledTransition';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleUnstyledTransition variant="none">NONE</ExampleUnstyledTransition>
    <ExampleUnstyledTransition variant="text">TEXT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition variant="plain">PLAIN</ExampleUnstyledTransition>
    <ExampleUnstyledTransition variant="light">LIGHT</ExampleUnstyledTransition>
    <ExampleUnstyledTransition variant="surface">
      SURFACE
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition variant="solid">SOLID</ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="none"
      border
    >
      NONE-BORDER
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="text"
      border
    >
      TEXT-BORDER
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="plain"
      border
    >
      PLAIN-BORDER
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="light"
      border
    >
      LIGHT-BORDER
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="surface"
      border
    >
      SURFACE-BORDER
    </ExampleUnstyledTransition>
    <ExampleUnstyledTransition
      variant="solid"
      border
    >
      SOLID-BORDER
    </ExampleUnstyledTransition>
  </ExampleSection>
);
