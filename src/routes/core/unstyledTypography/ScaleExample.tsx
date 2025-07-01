import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledTypography
        light
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        scale="fit"
      >
        FIT
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        scale="full"
      >
        FULL
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
