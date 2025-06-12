import imgSrc from '../../../assets/images/photo.png';

import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Image src={imgSrc} />
    </ExampleCard>
  </ExampleSection>
);
