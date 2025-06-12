import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Navigation
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Navigation>
      <Navigation
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Navigation>
      <Navigation
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Navigation>
      <Navigation
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Navigation>
      <Navigation
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Navigation>
      <Navigation
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Navigation>
      <Navigation
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Navigation>
    </ExampleCard>
  </ExampleSection>
);
