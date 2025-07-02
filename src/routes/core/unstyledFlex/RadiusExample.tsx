import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledFlex radius="none">NONE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="xs">XS</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="sm">SM</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="md">MD</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="lg">LG</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="xl">XL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="xxl">XXL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex radius="full">FULL</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
