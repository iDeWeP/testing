import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';
import imagePath from '../../../assets/images/photo.png';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Example src={imagePath} />
    </ExampleCard>
  </ExampleSection>
);
