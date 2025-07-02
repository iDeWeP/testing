import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { Example } from './Example';

export const FlowExample = () => (
  <ExampleSection title="Flow">
    <ExampleCard>
      <Example flow="row">
        <UnstyledBox variant="light">ROW #1</UnstyledBox>
        <UnstyledBox variant="light">ROW #2</UnstyledBox>
        <UnstyledBox variant="light">ROW #3</UnstyledBox>
      </Example>
      <Example flow="col">
        <UnstyledBox variant="light">COL #1</UnstyledBox>
        <UnstyledBox variant="light">COL #2</UnstyledBox>
        <UnstyledBox variant="light">COL #3</UnstyledBox>
      </Example>
      <Example flow="dense">
        <UnstyledBox variant="light">DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">DENSE #3</UnstyledBox>
      </Example>
      <Example flow="row-dense">
        <UnstyledBox variant="light">ROW-DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">ROW-DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">ROW-DENSE #3</UnstyledBox>
      </Example>
      <Example flow="col-dense">
        <UnstyledBox variant="light">COL-DENSE #1</UnstyledBox>
        <UnstyledBox variant="light">COL-DENSE #2</UnstyledBox>
        <UnstyledBox variant="light">COL-DENSE #3</UnstyledBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
