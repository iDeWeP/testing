import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <UnstyledTypography wrap="nowrap">
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
        NOWRAP NOWRAP NOWRAP NOWRAP NOWRAP
      </UnstyledTypography>
      <UnstyledTypography wrap="wrap">
        WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP WRAP
        WRAP
      </UnstyledTypography>
      <UnstyledTypography wrap="balance">
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
        BALANCE BALANCE BALANCE BALANCE BALANCE BALANCE
      </UnstyledTypography>
      <UnstyledTypography wrap="pretty">
        PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY PRETTY
        PRETTY PRETTY PRETTY PRETTY PRETTY
      </UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);

export default WrapExample;
