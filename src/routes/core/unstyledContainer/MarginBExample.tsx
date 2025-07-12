import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginBExample = () => (
  <ExampleSection title="Margin B">
    <ExampleCard>
      <Example mb="unset">UNSET</Example>
      <Example mb="none">NONE</Example>
      <Example mb="xs">XS</Example>
      <Example mb="sm">SM</Example>
      <Example mb="md">MD</Example>
      <Example mb="lg">LG</Example>
      <Example mb="xl">XL</Example>
      <Example mb="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example mb="unset">UNSET</Example>
      <Example mb="none">NONE</Example>
      <Example mb="xs-xs">XS-XS</Example>
      <Example mb="sm-sm">SM-SM</Example>
      <Example mb="md-md">MD-MD</Example>
      <Example mb="lg-lg">LG-LG</Example>
      <Example mb="xl-xl">XL-XL</Example>
      <Example mb="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
