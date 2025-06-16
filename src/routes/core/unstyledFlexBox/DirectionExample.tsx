import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlexBox } from '../../../core/components/UnstyledFlexBox/UnstyledFlexBox';

export const DirectionExample = () => (
  <ExampleSection title="Direction">
    <ExampleCard vertical>
      <UnstyledFlexBox direction="row">
        <UnstyledBox>ROW #1</UnstyledBox>
        <UnstyledBox>ROW #2</UnstyledBox>
        <UnstyledBox>ROW #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox direction="col">
        <UnstyledBox>COL #1</UnstyledBox>
        <UnstyledBox>COL #2</UnstyledBox>
        <UnstyledBox>COL #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox direction="row-reverse">
        <UnstyledBox>ROW-REVERSE #1</UnstyledBox>
        <UnstyledBox>ROW-REVERSE #2</UnstyledBox>
        <UnstyledBox>ROW-REVERSE #3</UnstyledBox>
      </UnstyledFlexBox>
      <UnstyledFlexBox direction="col-reverse">
        <UnstyledBox>COL-REVERSE #1</UnstyledBox>
        <UnstyledBox>COL-REVERSE #2</UnstyledBox>
        <UnstyledBox>COL-REVERSE #3</UnstyledBox>
      </UnstyledFlexBox>
    </ExampleCard>
  </ExampleSection>
);
