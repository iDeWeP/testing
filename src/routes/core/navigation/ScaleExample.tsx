import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Navigation
        scale="square"
        spacing="md"
      >
        SQUARE
      </Navigation>
      <Navigation
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Navigation>
      <Navigation
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Navigation>
      <Navigation
        scale="rect"
        spacing="md"
      >
        RECT
      </Navigation>
      <Navigation
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Navigation>
      <Navigation
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Navigation>
    </ExampleCard>
  </ExampleSection>
);
