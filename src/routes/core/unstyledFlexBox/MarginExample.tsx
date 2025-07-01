import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledFlexBox
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="md"
      >
        MD
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
