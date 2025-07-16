import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingTExample = () => (
  <ExampleSection title="Padding T">
    <ExampleCard>
      <Example pt="unset">UNSET</Example>
      <Example pt="none">NONE</Example>
      <Example pt="xs">XS</Example>
      <Example pt="sm">SM</Example>
      <Example pt="md">MD</Example>
      <Example pt="lg">LG</Example>
      <Example pt="xl">XL</Example>
      <Example pt="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example pt="unset">UNSET</Example>
      <Example pt="none">NONE</Example>
      <Example pt="xs-xs">XS-XS</Example>
      <Example pt="sm-sm">SM-SM</Example>
      <Example pt="md-md">MD-MD</Example>
      <Example pt="lg-lg">LG-LG</Example>
      <Example pt="xl-xl">XL-XL</Example>
      <Example pt="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
