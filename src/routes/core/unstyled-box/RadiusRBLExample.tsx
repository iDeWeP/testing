import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBLExample = () => (
  <ExampleSection title="Radius RBL">
    <ExampleCard>
      <Example rbl="unset">UNSET</Example>
      <Example rbl="none">NONE</Example>
      <Example rbl="xs">XS</Example>
      <Example rbl="sm">SM</Example>
      <Example rbl="md">MD</Example>
      <Example rbl="lg">LG</Example>
      <Example rbl="xl">XL</Example>
      <Example rbl="xxl">XXL</Example>
      <Example rbl="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
