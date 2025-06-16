import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const UnderlineExample = () => (
  <ExampleSection title="Underline">
    <ExampleCard>
      <UnstyledTypography underline="none">NONE</UnstyledTypography>
      <UnstyledTypography underline="hover">HOVER</UnstyledTypography>
      <UnstyledTypography underline="always">ALWAYS</UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
