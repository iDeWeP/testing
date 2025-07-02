import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledTypography radius="none">NONE</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="xs">XS</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="sm">SM</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="md">MD</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="lg">LG</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="xl">XL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="xxl">XXL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography radius="full">FULL</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
