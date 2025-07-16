import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPExample = () => (
  <ExampleSection title="Padding P">
    <ExampleCard>
      <Example p="unset">UNSET</Example>
      <Example p="none">NONE</Example>
      <Example p="xs">XS</Example>
      <Example p="sm">SM</Example>
      <Example p="md">MD</Example>
      <Example p="lg">LG</Example>
      <Example p="xl">XL</Example>
      <Example p="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example p="unset">UNSET</Example>
      <Example p="none">NONE</Example>
      <Example p="xs-xs">XS-XS</Example>
      <Example p="sm-sm">SM-SM</Example>
      <Example p="md-md">MD-MD</Example>
      <Example p="lg-lg">LG-LG</Example>
      <Example p="xl-xl">XL-XL</Example>
      <Example p="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
