import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Navigation spacing="none">NONE</Navigation>
      <Navigation spacing="xs">XS</Navigation>
      <Navigation spacing="sm">SM</Navigation>
      <Navigation spacing="md">MD</Navigation>
      <Navigation spacing="lg">LG</Navigation>
      <Navigation spacing="xl">XL</Navigation>
    </ExampleCard>
  </ExampleSection>
);
