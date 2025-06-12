import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Image
        src={imgSrc}
        variant="solid"
        color="neutral"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="primary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="secondary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="tertiary"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="success"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="warning"
      />
      <Image
        src={imgSrc}
        variant="solid"
        color="error"
      />
    </ExampleCard>
  </ExampleSection>
);
