import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingBExample = () => (
  <ExampleSection title="Padding B">
    <ExampleCard>
      <Example pb="unset">UNSET</Example>
      <Example pb="none">NONE</Example>
      <Example pb="xs">XS</Example>
      <Example pb="sm">SM</Example>
      <Example pb="md">MD</Example>
      <Example pb="lg">LG</Example>
      <Example pb="xl">XL</Example>
      <Example pb="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example pb="unset">UNSET</Example>
      <Example pb="none">NONE</Example>
      <Example pb="xs-xs">XS-XS</Example>
      <Example pb="sm-sm">SM-SM</Example>
      <Example pb="md-md">MD-MD</Example>
      <Example pb="lg-lg">LG-LG</Example>
      <Example pb="xl-xl">XL-XL</Example>
      <Example pb="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
