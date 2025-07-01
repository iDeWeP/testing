import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledTypography size="xs">XS</ExampleUnstyledTypography>
      <ExampleUnstyledTypography size="sm">SM</ExampleUnstyledTypography>
      <ExampleUnstyledTypography size="md">MD</ExampleUnstyledTypography>
      <ExampleUnstyledTypography size="lg">LG</ExampleUnstyledTypography>
      <ExampleUnstyledTypography size="xl">XL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography size="xxl">XXL</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
