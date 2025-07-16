import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard>
      <Example spacing="unset">UNSET</Example>
      <Example spacing="none">NONE</Example>
      <Example spacing="xs">XS</Example>
      <Example spacing="sm">SM</Example>
      <Example spacing="md">MD</Example>
      <Example spacing="lg">LG</Example>
      <Example spacing="xl">XL</Example>
      <Example spacing="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example spacing="unset">UNSET</Example>
      <Example spacing="none">NONE</Example>
      <Example spacing="xs-xs">XS-XS</Example>
      <Example spacing="sm-sm">SM-SM</Example>
      <Example spacing="md-md">MD-MD</Example>
      <Example spacing="lg-lg">LG-LG</Example>
      <Example spacing="xl-xl">XL-XL</Example>
      <Example spacing="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
