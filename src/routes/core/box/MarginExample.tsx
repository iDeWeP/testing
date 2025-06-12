import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledBox margin="none">NONE</UnstyledBox>
      <UnstyledBox margin="xs">XS</UnstyledBox>
      <UnstyledBox margin="sm">SM</UnstyledBox>
      <UnstyledBox margin="md">MD</UnstyledBox>
      <UnstyledBox margin="lg">LG</UnstyledBox>
      <UnstyledBox margin="xl">XL</UnstyledBox>
      <UnstyledBox margin="xxl">XXL</UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
