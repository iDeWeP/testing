import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { Example } from './Example';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <Example wrap="nowrap">
        <UnstyledBox variant="light">NOWRAP #1</UnstyledBox>
        <UnstyledBox variant="light">NOWRAP #2</UnstyledBox>
        <UnstyledBox variant="light">NOWRAP #3</UnstyledBox>
      </Example>
      <Example wrap="wrap">
        <UnstyledBox variant="light">WRAP #1</UnstyledBox>
        <UnstyledBox variant="light">WRAP #2</UnstyledBox>
        <UnstyledBox variant="light">WRAP #3</UnstyledBox>
      </Example>
      <Example wrap="wrap-reverse">
        <UnstyledBox variant="light">WRAP-REVERSE #1</UnstyledBox>
        <UnstyledBox variant="light">WRAP-REVERSE #2</UnstyledBox>
        <UnstyledBox variant="light">WRAP-REVERSE #3</UnstyledBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
