import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <ExampleUnstyledTypography wrap="nowrap">
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wrap="wrap">
        WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP
        WRAP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wrap="balance">
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography wrap="pretty">
        PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY
        PRETTY PRETTY PRETTY PRETTY PRETTY
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
