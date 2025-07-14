import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBExample = () => (
  <ExampleSection title="Radiu RB">
    <ExampleCard>
      <Example rb="unset">UNSET</Example>
      <Example rb="none">NONE</Example>
      <Example rb="xs">XS</Example>
      <Example rb="sm">SM</Example>
      <Example rb="md">MD</Example>
      <Example rb="lg">LG</Example>
      <Example rb="xl">XL</Example>
      <Example rb="xxl">XXL</Example>
      <Example rb="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
