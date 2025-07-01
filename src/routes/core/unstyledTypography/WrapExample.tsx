import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        wrap="nowrap"
      >
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wrap="wrap"
      >
        WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP
        WRAP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wrap="balance"
      >
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        wrap="pretty"
      >
        PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY
        PRETTY PRETTY PRETTY PRETTY PRETTY
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
