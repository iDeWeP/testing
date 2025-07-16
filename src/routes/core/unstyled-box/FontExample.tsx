import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const FontExample = () => (
  <ExampleSection title="Font">
    <ExampleCard>
      <Example font="unset">UNSET</Example>
      <Example font="xs">XS</Example>
      <Example font="sm">SM</Example>
      <Example font="md">MD</Example>
      <Example font="lg">LG</Example>
      <Example font="xl">XL</Example>
      <Example font="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example font="unset">UNSET</Example>
      <Example font="xs-xs">XS-XS</Example>
      <Example font="sm-sm">SM-SM</Example>
      <Example font="md-md">MD-MD</Example>
      <Example font="lg-lg">LG-LG</Example>
      <Example font="xl-xl">XL-XL</Example>
      <Example font="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
