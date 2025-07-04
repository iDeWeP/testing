import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapXExample = () => (
  <ExampleSection title="Gap X">
    <ExampleCard>
      <Example gx="unset">UNSET</Example>
      <Example gx="none">NONE</Example>
      <Example gx="xs">XS</Example>
      <Example gx="sm">SM</Example>
      <Example gx="md">MD</Example>
      <Example gx="lg">LG</Example>
      <Example gx="xl">XL</Example>
      <Example gx="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
