import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledFlex margin="none">NONE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="xs">XS</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="sm">SM</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="md">MD</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="lg">LG</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="xl">XL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex margin="xxl">XXL</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
