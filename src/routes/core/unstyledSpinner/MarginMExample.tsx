import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMExample = () => (
  <ExampleSection title="Margin M">
    <ExampleCard>
      <Example m="unset">UNSET</Example>
      <Example m="none">NONE</Example>
      <Example m="xs">XS</Example>
      <Example m="sm">SM</Example>
      <Example m="md">MD</Example>
      <Example m="lg">LG</Example>
      <Example m="xl">XL</Example>
      <Example m="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example m="unset">UNSET</Example>
      <Example m="none">NONE</Example>
      <Example m="xs-xs">XS-XS</Example>
      <Example m="sm-sm">SM-SM</Example>
      <Example m="md-md">MD-MD</Example>
      <Example m="lg-lg">LG-LG</Example>
      <Example m="xl-xl">XL-XL</Example>
      <Example m="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
