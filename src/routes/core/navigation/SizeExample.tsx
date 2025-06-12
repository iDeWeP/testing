import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Navigation size="none">NONE</Navigation>
      <Navigation size="xs">XS</Navigation>
      <Navigation size="sm">SM</Navigation>
      <Navigation size="md">MD</Navigation>
      <Navigation size="lg">LG</Navigation>
      <Navigation size="xl">XL</Navigation>
      <Navigation size="xxl">XXL</Navigation>
    </ExampleCard>
    <ExampleCard align>
      <Navigation size="xs-xs">XS-XS</Navigation>
      <Navigation size="sm-sm">SM-SM</Navigation>
      <Navigation size="md-md">MD-MD</Navigation>
      <Navigation size="lg-lg">LG-LG</Navigation>
      <Navigation size="xl-xl">XL-XL</Navigation>
      <Navigation size="xxl-xxl">XXL-XXL</Navigation>
    </ExampleCard>
  </ExampleSection>
);
