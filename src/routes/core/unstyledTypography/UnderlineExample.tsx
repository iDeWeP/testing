import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const UnderlineExample = () => (
  <ExampleSection title="Underline">
    <ExampleCard>
      <ExampleUnstyledTypography
        clear
        underline="normal"
      >
        NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        underline="none"
      >
        NONE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        underline="hover"
      >
        HOVER
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        clear
        underline="always"
      >
        ALWAYS
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
