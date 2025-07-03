import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusTExample = () => (
  <ExampleSection title="Radius T">
    <ExampleCard>
      <Example rt="none">NONE</Example>
      <Example rt="xs">XS</Example>
      <Example rt="sm">SM</Example>
      <Example rt="md">MD</Example>
      <Example rt="lg">LG</Example>
      <Example rt="xl">XL</Example>
      <Example rt="xxl">XXL</Example>
      <Example rt="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
