import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard>
      <Example gap="unset">UNSET</Example>
      <Example gap="none">NONE</Example>
      <Example gap="xs">XS</Example>
      <Example gap="sm">SM</Example>
      <Example gap="md">MD</Example>
      <Example gap="lg">LG</Example>
      <Example gap="xl">XL</Example>
      <Example gap="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example gap="unset">UNSET</Example>
      <Example gap="none">NONE</Example>
      <Example gap="xs-xs">XS-XS</Example>
      <Example gap="sm-sm">SM-SM</Example>
      <Example gap="md-md">MD-MD</Example>
      <Example gap="lg-lg">LG-LG</Example>
      <Example gap="xl-xl">XL-XL</Example>
      <Example gap="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
