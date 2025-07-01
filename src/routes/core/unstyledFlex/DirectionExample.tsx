import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const DirectionExample = () => (
  <ExampleSection title="Direction">
    <ExampleCard>
      <UnstyledFlex
        variant="none"
        direction="row"
      >
        <UnstyledBox variant="light">ROW #1</UnstyledBox>
        <UnstyledBox variant="light">ROW #2</UnstyledBox>
        <UnstyledBox variant="light">ROW #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        direction="col"
      >
        <UnstyledBox variant="light">COL #1</UnstyledBox>
        <UnstyledBox variant="light">COL #2</UnstyledBox>
        <UnstyledBox variant="light">COL #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        direction="row-reverse"
      >
        <UnstyledBox variant="light">ROW-REVERSE #1</UnstyledBox>
        <UnstyledBox variant="light">ROW-REVERSE #2</UnstyledBox>
        <UnstyledBox variant="light">ROW-REVERSE #3</UnstyledBox>
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        direction="col-reverse"
      >
        <UnstyledBox variant="light">COL-REVERSE #1</UnstyledBox>
        <UnstyledBox variant="light">COL-REVERSE #2</UnstyledBox>
        <UnstyledBox variant="light">COL-REVERSE #3</UnstyledBox>
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
