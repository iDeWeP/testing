import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMXExample = () => (
  <ExampleSection title="Margin MX">
    <ExampleCard>
      <Example mx="unset">UNSET</Example>
      <Example mx="none">NONE</Example>
      <Example mx="xs">XS</Example>
      <Example mx="sm">SM</Example>
      <Example mx="md">MD</Example>
      <Example mx="lg">LG</Example>
      <Example mx="xl">XL</Example>
      <Example mx="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example mx="unset">UNSET</Example>
      <Example mx="none">NONE</Example>
      <Example mx="xs-xs">XS-XS</Example>
      <Example mx="sm-sm">SM-SM</Example>
      <Example mx="md-md">MD-MD</Example>
      <Example mx="lg-lg">LG-LG</Example>
      <Example mx="xl-xl">XL-XL</Example>
      <Example mx="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
