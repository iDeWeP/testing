import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Image } from '../../../core/components/Image/Image';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Image
        size="md"
        scale="normal"
      />
      <Image
        size="md"
        scale="fit"
      />
      <Image
        size="md"
        scale="full"
      />
    </ExampleCard>
  </ExampleSection>
);
