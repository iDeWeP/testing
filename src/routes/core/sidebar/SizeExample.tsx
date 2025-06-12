import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Sidebar size="none">NONE</Sidebar>
      <Sidebar size="xs">XS</Sidebar>
      <Sidebar size="sm">SM</Sidebar>
      <Sidebar size="md">MD</Sidebar>
      <Sidebar size="lg">LG</Sidebar>
      <Sidebar size="xl">XL</Sidebar>
      <Sidebar size="xxl">XXL</Sidebar>
    </ExampleCard>
    <ExampleCard align>
      <Sidebar size="xs-xs">XS-XS</Sidebar>
      <Sidebar size="sm-sm">SM-SM</Sidebar>
      <Sidebar size="md-md">MD-MD</Sidebar>
      <Sidebar size="lg-lg">LG-LG</Sidebar>
      <Sidebar size="xl-xl">XL-XL</Sidebar>
      <Sidebar size="xxl-xxl">XXL-XXsL</Sidebar>
    </ExampleCard>
  </ExampleSection>
);
