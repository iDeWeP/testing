import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledFlexBox
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="all"
      >
        ALL
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="x"
      >
        X
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="y"
      >
        Y
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="top"
      >
        TOP
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="bottom"
      >
        BOTTOM
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="left"
      >
        LEFT
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="none"
        border="right"
      >
        RIGHT
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
