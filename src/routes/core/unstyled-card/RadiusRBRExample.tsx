import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBRExample = () => (
  <ExampleSection title="Radius RBR">
    <ExampleCard>
      <Example rbr="unset">UNSET</Example>
      <Example rbr="none">NONE</Example>
      <Example rbr="xs">XS</Example>
      <Example rbr="sm">SM</Example>
      <Example rbr="md">MD</Example>
      <Example rbr="lg">LG</Example>
      <Example rbr="xl">XL</Example>
      <Example rbr="xxl">XXL</Example>
      <Example rbr="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
