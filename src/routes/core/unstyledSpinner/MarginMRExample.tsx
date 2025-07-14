import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMRExample = () => (
  <ExampleSection title="Margin MR">
    <ExampleCard>
      <Example mr="unset">UNSET</Example>
      <Example mr="none">NONE</Example>
      <Example mr="xs">XS</Example>
      <Example mr="sm">SM</Example>
      <Example mr="md">MD</Example>
      <Example mr="lg">LG</Example>
      <Example mr="xl">XL</Example>
      <Example mr="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example mr="unset">UNSET</Example>
      <Example mr="none">NONE</Example>
      <Example mr="xs-xs">XS-XS</Example>
      <Example mr="sm-sm">SM-SM</Example>
      <Example mr="md-md">MD-MD</Example>
      <Example mr="lg-lg">LG-LG</Example>
      <Example mr="xl-xl">XL-XL</Example>
      <Example mr="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
