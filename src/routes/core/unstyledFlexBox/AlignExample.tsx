import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard vertical>
      <UnstyledFlexBox align="stretch">
        <UnstyledBox>STRETCH #2</UnstyledBox>
        <UnstyledBox>STRETCH #1</UnstyledBox>
        <UnstyledBox>STRETCH #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox align="start">
        <UnstyledBox>START #1</UnstyledBox>
        <UnstyledBox>START #2</UnstyledBox>
        <UnstyledBox>START #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox align="end">
        <UnstyledBox>END #1</UnstyledBox>
        <UnstyledBox>END #2</UnstyledBox>
        <UnstyledBox>END #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox align="center">
        <UnstyledBox>CENTER #1</UnstyledBox>
        <UnstyledBox>CENTER #2</UnstyledBox>
        <UnstyledBox>CENTER #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox align="baseline">
        <UnstyledBox>BASELINE #1</UnstyledBox>
        <UnstyledBox>BASELINE #2</UnstyledBox>
        <UnstyledBox>BASELINE #3</UnstyledBox>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
