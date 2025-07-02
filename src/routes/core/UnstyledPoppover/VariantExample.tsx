import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledPopover variant="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover variant="text">TEXT</ExampleUnstyledPopover>
      <ExampleUnstyledPopover variant="plain">PLAIN</ExampleUnstyledPopover>
      <ExampleUnstyledPopover variant="light">LIGHT</ExampleUnstyledPopover>
      <ExampleUnstyledPopover variant="surface">SURFACE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover variant="solid">SOLID</ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
