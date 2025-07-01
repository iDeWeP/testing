import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const FlowExample = () => (
  <ExampleSection title="Flow">
    <ExampleCard>
      <ExampleUnstyledGrid flow="row">
        <UnstyledBox variant="light">ROW #1</UnstyledBox>
        <UnstyledBox variant="light">ROW #2</UnstyledBox>
        <UnstyledBox variant="light">ROW #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid flow="col">
        <UnstyledBox variant="light">COL #1</UnstyledBox>
        <UnstyledBox variant="light">COL #2</UnstyledBox>
        <UnstyledBox variant="light">COL #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid flow="dense">
        <UnstyledBox variant="light">DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">DENSE #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid flow="row-dense">
        <UnstyledBox variant="light">ROW-DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">ROW-DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">ROW-DENSE #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid flow="col-dense">
        <UnstyledBox variant="light">COL-DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">COL-DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">COL-DENSE #3</UnstyledBox>
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
