import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const WeightExample = () => (
  <ExampleSection title="Weight">
    <ExampleCard>
      <UnstyledTypography weight="normal">NORMAL</UnstyledTypography>
      <UnstyledTypography weight="semi">SEMI</UnstyledTypography>
      <UnstyledTypography weight="bold">BOLD</UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
