import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledTypography scale="normal">
        NORMAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography scale="fit">FIT</ExampleUnstyledTypography>
      <ExampleUnstyledTypography scale="full">FULL</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
