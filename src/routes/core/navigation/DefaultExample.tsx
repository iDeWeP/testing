import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Navigation>Navigation</Navigation>
    </ExampleCard>
  </ExampleSection>
);
