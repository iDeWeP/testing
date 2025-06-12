import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Navigation margin="none">NONE</Navigation>
      <Navigation margin="xs">XS</Navigation>
      <Navigation margin="sm">SM</Navigation>
      <Navigation margin="md">MD</Navigation>
      <Navigation margin="lg">LG</Navigation>
      <Navigation margin="xl">XL</Navigation>
      <Navigation margin="xxl">XXL</Navigation>
    </ExampleCard>
  </ExampleSection>
);
