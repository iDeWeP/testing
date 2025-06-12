import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Image
        src={imgSrc}
        variant="text"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="plain"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="light"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="surface"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="text"
        border
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="plain"
        border
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="light"
        border
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="surface"
        border
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        border
        color="primary"
      />
    </ExampleCard>
  </ExampleSection>
);
