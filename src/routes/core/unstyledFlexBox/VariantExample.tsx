import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <UnstyledFlexBox variant="none">NONE</UnstyledFlexBox>
      <UnstyledFlexBox variant="text">TEXT</UnstyledFlexBox>
      <UnstyledFlexBox variant="plain">PLAIN</UnstyledFlexBox>
      <UnstyledFlexBox variant="light">LIGHT</UnstyledFlexBox>
      <UnstyledFlexBox variant="surface">SURFACE</UnstyledFlexBox>
      <UnstyledFlexBox variant="solid">SOLID</UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border
      >
        NONE-BORDER
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="text"
        border
      >
        TEXT-BORDER
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="plain"
        border
      >
        PLAIN-BORDER
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        border
      >
        LIGHT-BORDER
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="surface"
        border
      >
        SURFACE-BORDER
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="solid"
        border
      >
        SOLID-BORDER
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
