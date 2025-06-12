import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Navigation
        size="md"
        scale="normal"
      >
        NORMAL
      </Navigation>
      <Navigation
        size="md"
        scale="fit"
      >
        FIT
      </Navigation>
      <Navigation
        size="md"
        scale="full"
      >
        FULL
      </Navigation>
    </ExampleCard>
  </ExampleSection>
);
