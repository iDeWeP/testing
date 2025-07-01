import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledFlex variant="none">NONE</UnstyledFlex>
      <UnstyledFlex variant="text">TEXT</UnstyledFlex>
      <UnstyledFlex variant="plain">PLAIN</UnstyledFlex>
      <UnstyledFlex variant="light">LIGHT</UnstyledFlex>
      <UnstyledFlex variant="surface">SURFACE</UnstyledFlex>
      <UnstyledFlex variant="solid">SOLID</UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledFlex>
      <UnstyledFlex
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledFlex>
      <UnstyledFlex
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledFlex>
      <UnstyledFlex
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledFlex>
      <UnstyledFlex
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
