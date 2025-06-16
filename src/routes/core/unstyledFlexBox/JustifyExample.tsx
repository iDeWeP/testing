import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const JustifyExample = () => (
  <ExampleSection title="Justify">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledFlexBox justify="normal">
        <UnstyledBox>NORMAL #2</UnstyledBox>
        <UnstyledBox>NORMAL #1</UnstyledBox>
        <UnstyledBox>NORMAL #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="stretch">
        <UnstyledBox>STRETCH #2</UnstyledBox>
        <UnstyledBox>STRETCH #1</UnstyledBox>
        <UnstyledBox>STRETCH #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="start">
        <UnstyledBox>START #1</UnstyledBox>
        <UnstyledBox>START #2</UnstyledBox>
        <UnstyledBox>START #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="end">
        <UnstyledBox>END #1</UnstyledBox>
        <UnstyledBox>END #2</UnstyledBox>
        <UnstyledBox>END #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="center">
        <UnstyledBox>CENTER #1</UnstyledBox>
        <UnstyledBox>CENTER #2</UnstyledBox>
        <UnstyledBox>CENTER #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="evenly">
        <UnstyledBox>EVENLY #1</UnstyledBox>
        <UnstyledBox>EVENLY #2</UnstyledBox>
        <UnstyledBox>EVENLY #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="between">
        <UnstyledBox>BETWEEN #1</UnstyledBox>
        <UnstyledBox>BETWEEN #2</UnstyledBox>
        <UnstyledBox>BETWEEN #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox justify="around">
        <UnstyledBox>AROUND #1</UnstyledBox>
        <UnstyledBox>AROUND #2</UnstyledBox>
        <UnstyledBox>AROUND #3</UnstyledBox>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
