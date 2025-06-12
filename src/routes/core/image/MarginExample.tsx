import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Image
        src={imgSrc}
        margin="none"
      />
      <Image
        src={imgSrc}
        margin="xs"
      />
      <Image
        src={imgSrc}
        margin="sm"
      />
      <Image
        src={imgSrc}
        margin="md"
      />
      <Image
        src={imgSrc}
        margin="lg"
      />
      <Image
        src={imgSrc}
        margin="xl"
      />
      <Image
        src={imgSrc}
        margin="xxl"
      />
    </ExampleCard>
  </ExampleSection>
);
