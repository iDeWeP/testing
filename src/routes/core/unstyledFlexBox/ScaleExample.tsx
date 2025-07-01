import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledFlexBox
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
