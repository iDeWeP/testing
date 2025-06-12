import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Image
        src={imgSrc}
        border="all"
      />
      <Image
        src={imgSrc}
        border="x"
      />
      <Image
        src={imgSrc}
        border="y"
      />
      <Image
        src={imgSrc}
        border="top"
      />
      <Image
        src={imgSrc}
        border="bottom"
      />
      <Image
        src={imgSrc}
        border="left"
      />
      <Image
        src={imgSrc}
        border="right"
      />
    </ExampleCard>
  </ExampleSection>
);
