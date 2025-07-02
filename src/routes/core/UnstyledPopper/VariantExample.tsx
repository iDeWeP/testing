import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledPopper variant="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper variant="text">TEXT</ExampleUnstyledPopper>
      <ExampleUnstyledPopper variant="plain">PLAIN</ExampleUnstyledPopper>
      <ExampleUnstyledPopper variant="light">LIGHT</ExampleUnstyledPopper>
      <ExampleUnstyledPopper variant="surface">SURFACE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper variant="solid">SOLID</ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
