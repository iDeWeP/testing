import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <UnstyledFlexBox wrap="nowrap">
        <UnstyledBox>NOWRAP #1</UnstyledBox>
        <UnstyledBox>NOWRAP #2</UnstyledBox>
        <UnstyledBox>NOWRAP #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox wrap="wrap">
        <UnstyledBox>WRAP #1</UnstyledBox>
        <UnstyledBox>WRAP #2</UnstyledBox>
        <UnstyledBox>WRAP #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox wrap="wrap-reverse">
        <UnstyledBox>WRAP-REVERSE #1</UnstyledBox>
        <UnstyledBox>WRAP-REVERSE #2</UnstyledBox>
        <UnstyledBox>WRAP-REVERSE #3</UnstyledBox>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
