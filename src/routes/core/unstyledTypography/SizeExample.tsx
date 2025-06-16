import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledTypography } from '../../../core/components/UnstyledTypography/UnstyledTypography';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard align>
      <UnstyledTypography size="xs">XS</UnstyledTypography>
      <UnstyledTypography size="sm">SM</UnstyledTypography>
      <UnstyledTypography size="md">MD</UnstyledTypography>
      <UnstyledTypography size="lg">LG</UnstyledTypography>
      <UnstyledTypography size="xl">XL</UnstyledTypography>
      <UnstyledTypography size="xxl">XXL</UnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
