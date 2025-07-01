import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const WeightExample = () => (
  <ExampleSection title="Weight">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        weight="normal"
      >
        NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        weight="semi"
      >
        SEMI
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        weight="bold"
      >
        BOLD
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
