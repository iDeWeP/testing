import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusTRExample = () => (
  <ExampleSection title="Radius TR">
    <ExampleCard>
      <Example rtr="none">NONE</Example>
      <Example rtr="xs">XS</Example>
      <Example rtr="sm">SM</Example>
      <Example rtr="md">MD</Example>
      <Example rtr="lg">LG</Example>
      <Example rtr="xl">XL</Example>
      <Example rtr="xxl">XXL</Example>
      <Example rtr="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
