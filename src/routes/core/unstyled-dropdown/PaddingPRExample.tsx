import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPRExample = () => (
  <ExampleSection title="Padding PR">
    <ExampleCard>
      <Example pr="unset">UNSET</Example>
      <Example pr="none">NONE</Example>
      <Example pr="xs">XS</Example>
      <Example pr="sm">SM</Example>
      <Example pr="md">MD</Example>
      <Example pr="lg">LG</Example>
      <Example pr="xl">XL</Example>
      <Example pr="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example pr="unset">UNSET</Example>
      <Example pr="none">NONE</Example>
      <Example pr="xs-xs">XS-XS</Example>
      <Example pr="sm-sm">SM-SM</Example>
      <Example pr="md-md">MD-MD</Example>
      <Example pr="lg-lg">LG-LG</Example>
      <Example pr="xl-xl">XL-XL</Example>
      <Example pr="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
