import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Example radius="none">NONE</Example>
      <Example radius="xs">XS</Example>
      <Example radius="sm">SM</Example>
      <Example radius="md">MD</Example>
      <Example radius="lg">LG</Example>
      <Example radius="xl">XL</Example>
      <Example radius="xxl">XXL</Example>
      <Example radius="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
