import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Image
        src={imgSrc}
        scale="square"
        spacing="md"
      />
      <Image
        src={imgSrc}
        scale="square-fit"
        spacing="md"
      />
      <Image
        src={imgSrc}
        scale="square-full"
        spacing="md"
      />
      <Image
        src={imgSrc}
        scale="rect"
        spacing="md"
      />
      <Image
        src={imgSrc}
        scale="rect-fit"
        spacing="md"
      />
      <Image
        src={imgSrc}
        scale="rect-full"
        spacing="md"
      />
    </ExampleCard>
  </ExampleSection>
);
