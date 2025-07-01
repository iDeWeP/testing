import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WeightExample = () => (
  <ExampleSection title="Weight">
    <ExampleCard>
      <ExampleUnstyledTypography weight="normal">
        NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography weight="semi">SEMI</ExampleUnstyledTypography>
      <ExampleUnstyledTypography weight="bold">BOLD</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
