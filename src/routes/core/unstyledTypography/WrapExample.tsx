import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <UnstyledTypography
        variant="none"
        wrap="nowrap"
      >
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wrap="wrap"
      >
        WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP
        WRAP
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wrap="balance"
      >
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
      </UnstyledTypography>
      <UnstyledTypography
        variant="none"
        wrap="pretty"
      >
        PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY
        PRETTY PRETTY PRETTY PRETTY PRETTY
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
