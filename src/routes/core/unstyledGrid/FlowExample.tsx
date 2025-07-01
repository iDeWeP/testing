import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const FlowExample = () => (
  <ExampleSection title="Flow">
    <ExampleCard>
      <UnstyledGrid flow="row">
        <UnstyledBox>ROW #1</UnstyledBox>
        <UnstyledBox>ROW #2</UnstyledBox>
        <UnstyledBox>ROW #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid flow="col">
        <UnstyledBox>COL #1</UnstyledBox>
        <UnstyledBox>COL #2</UnstyledBox>
        <UnstyledBox>COL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid flow="dense">
        <UnstyledBox>DENSE #1</UnstyledBox>
        <UnstyledBox>DENSE #2</UnstyledBox>
        <UnstyledBox>DENSE #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid flow="row-dense">
        <UnstyledBox>ROW-DENSE #1</UnstyledBox>
        <UnstyledBox>ROW-DENSE #2</UnstyledBox>
        <UnstyledBox>ROW-DENSE #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid flow="col-dense">
        <UnstyledBox>COL-DENSE #1</UnstyledBox>
        <UnstyledBox>COL-DENSE #2</UnstyledBox>
        <UnstyledBox>COL-DENSE #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
