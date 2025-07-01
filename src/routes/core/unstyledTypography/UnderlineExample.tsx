import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const UnderlineExample = () => (
  <ExampleSection title="Underline">
    <ExampleCard>
      <ExampleUnstyledTypography underline="normal">NORMAL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography underline="none">NONE</ExampleUnstyledTypography>
      <ExampleUnstyledTypography underline="hover">HOVER</ExampleUnstyledTypography>
      <ExampleUnstyledTypography underline="always">ALWAYS</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
