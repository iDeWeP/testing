import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Header size="none">NONE</Header>
      <Header size="xs">XS</Header>
      <Header size="sm">SM</Header>
      <Header size="md">MD</Header>
      <Header size="lg">LG</Header>
      <Header size="xl">XL</Header>
    </ExampleCard>
    <ExampleCard align>
      <Header size="xs-xs">XS-XS</Header>
      <Header size="sm-sm">SM-SM</Header>
      <Header size="md-md">MD-MD</Header>
      <Header size="lg-lg">LG-LG</Header>
      <Header size="xl-xl">XL-XL</Header>
    </ExampleCard>
  </ExampleSection>
);
