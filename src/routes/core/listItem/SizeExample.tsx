import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <Example size="unset">UNSET</Example>
      <Example size="xs">XS</Example>
      <Example size="sm">SM</Example>
      <Example size="md">MD</Example>
      <Example size="lg">LG</Example>
      <Example size="xl">XL</Example>
      <Example size="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example size="unset">UNSET</Example>
      <Example size="xs-xs">XS-XS</Example>
      <Example size="sm-sm">SM-SM</Example>
      <Example size="md-md">MD-MD</Example>
      <Example size="lg-lg">LG-LG</Example>
      <Example size="xl-xl">XL-XL</Example>
      <Example size="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
