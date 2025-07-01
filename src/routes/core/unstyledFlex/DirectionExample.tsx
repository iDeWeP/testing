import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const DirectionExample = () => (
  <ExampleSection title="Direction">
    <ExampleCard>
      <UnstyledFlex direction="row">
        <UnstyledBox>ROW #1</UnstyledBox>
        <UnstyledBox>ROW #2</UnstyledBox>
        <UnstyledBox>ROW #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex direction="col">
        <UnstyledBox>COL #1</UnstyledBox>
        <UnstyledBox>COL #2</UnstyledBox>
        <UnstyledBox>COL #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex direction="row-reverse">
        <UnstyledBox>ROW-REVERSE #1</UnstyledBox>
        <UnstyledBox>ROW-REVERSE #2</UnstyledBox>
        <UnstyledBox>ROW-REVERSE #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex direction="col-reverse">
        <UnstyledBox>COL-REVERSE #1</UnstyledBox>
        <UnstyledBox>COL-REVERSE #2</UnstyledBox>
        <UnstyledBox>COL-REVERSE #3</UnstyledBox>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
