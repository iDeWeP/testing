import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Image size="none" />
      <Image size="xs" />
      <Image size="sm" />
      <Image size="md" />
      <Image size="lg" />
      <Image size="xl" />
      <Image size="xxl" />
    </ExampleCard>
    <ExampleCard align>
      <Image size="xs-xs" />
      <Image size="sm-sm" />
      <Image size="md-md" />
      <Image size="lg-lg" />
      <Image size="xl-xl" />
      <Image size="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
