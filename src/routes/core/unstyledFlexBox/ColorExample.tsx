import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <UnstyledFlexBox
        variant="light"
        color="surface"
      >
        SURFACE
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="primary"
      >
        PRIMARY
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="secondary"
      >
        SECONDARY
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="success"
      >
        SUCCESS
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="warning"
      >
        WARNING
      </UnstyledFlexBox>
      <UnstyledFlexBox
        variant="light"
        color="error"
      >
        ERROR
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
