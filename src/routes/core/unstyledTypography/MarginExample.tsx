import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledTypography margin="none">NONE</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="xs">XS</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="sm">SM</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="md">MD</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="lg">LG</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="xl">XL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography margin="xxl">XXL</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
