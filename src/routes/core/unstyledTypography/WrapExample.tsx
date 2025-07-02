import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <Example wrap="nowrap">
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
      </Example>
      <Example wrap="wrap">
        WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP
        WRAP
      </Example>
      <Example wrap="balance">
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
      </Example>
      <Example wrap="pretty">
        PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY
        PRETTY PRETTY PRETTY PRETTY PRETTY
      </Example>
    </ExampleCard>
  </ExampleSection>
);
