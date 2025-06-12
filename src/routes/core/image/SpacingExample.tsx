import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Image
        src={imgSrc}
        spacing="none"
      />
      <Image
        src={imgSrc}
        spacing="xs"
      />
      <Image
        src={imgSrc}
        spacing="sm"
      />
      <Image
        src={imgSrc}
        spacing="md"
      />
      <Image
        src={imgSrc}
        spacing="lg"
      />
      <Image
        src={imgSrc}
        spacing="xl"
      />
    </ExampleCard>
  </ExampleSection>
);
