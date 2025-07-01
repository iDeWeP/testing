import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledFlexBox
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="md"
      >
        MD
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
