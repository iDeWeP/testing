import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Image
        src={imgSrc}
        radius="none"
      />
      <Image
        src={imgSrc}
        radius="xs"
      />
      <Image
        src={imgSrc}
        radius="sm"
      />
      <Image
        src={imgSrc}
        radius="md"
      />
      <Image
        src={imgSrc}
        radius="lg"
      />
      <Image
        src={imgSrc}
        radius="xl"
      />
      <Image
        src={imgSrc}
        radius="full"
      />
    </ExampleCard>
  </ExampleSection>
);
