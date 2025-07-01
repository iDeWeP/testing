import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <ExampleUnstyledFlex variant="none">NONE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex variant="text">TEXT</ExampleUnstyledFlex>
      <ExampleUnstyledFlex variant="plain">PLAIN</ExampleUnstyledFlex>
      <ExampleUnstyledFlex variant="light">LIGHT</ExampleUnstyledFlex>
      <ExampleUnstyledFlex variant="surface">SURFACE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex variant="solid">SOLID</ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="none"
        border
      >
        NONE-BORDER
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="text"
        border
      >
        TEXT-BORDER
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="plain"
        border
      >
        PLAIN-BORDER
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        border
      >
        LIGHT-BORDER
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="surface"
        border
      >
        SURFACE-BORDER
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="solid"
        border
      >
        SOLID-BORDER
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
