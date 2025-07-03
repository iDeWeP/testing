import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRExample = () => (
  <ExampleSection title="Radius R">
    <ExampleCard>
      <Example rr="none">NONE</Example>
      <Example rr="xs">XS</Example>
      <Example rr="sm">SM</Example>
      <Example rr="md">MD</Example>
      <Example rr="lg">LG</Example>
      <Example rr="xl">XL</Example>
      <Example rr="xxl">XXL</Example>
      <Example rr="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
