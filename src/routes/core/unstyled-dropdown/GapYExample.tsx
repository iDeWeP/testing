import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapYExample = () => (
  <ExampleSection title="Gap Y">
    <ExampleCard>
      <Example gy="unset">UNSET</Example>
      <Example gy="none">NONE</Example>
      <Example gy="xs">XS</Example>
      <Example gy="sm">SM</Example>
      <Example gy="md">MD</Example>
      <Example gy="lg">LG</Example>
      <Example gy="xl">XL</Example>
      <Example gy="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example gy="unset">UNSET</Example>
      <Example gy="none">NONE</Example>
      <Example gy="xs-xs">XS-SX</Example>
      <Example gy="sm-sm">SM-SM</Example>
      <Example gy="md-md">MD-MD</Example>
      <Example gy="lg-lg">LG-LG</Example>
      <Example gy="xl-xl">XL-XL</Example>
      <Example gy="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
