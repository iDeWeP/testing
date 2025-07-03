import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusTLExample = () => (
  <ExampleSection title="Radius TL">
    <ExampleCard>
      <Example rtl="none">NONE</Example>
      <Example rtl="xs">XS</Example>
      <Example rtl="sm">SM</Example>
      <Example rtl="md">MD</Example>
      <Example rtl="lg">LG</Example>
      <Example rtl="xl">XL</Example>
      <Example rtl="xxl">XXL</Example>
      <Example rtl="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
