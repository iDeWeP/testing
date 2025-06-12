import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Image
        src={imgSrc}
        variant="solid"
        radius="none"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="xs"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="sm"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="md"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="lg"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="xl"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        radius="full"
        color="primary"
      />
    </ExampleCard>
  </ExampleSection>
);
