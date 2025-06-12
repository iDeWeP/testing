import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Header
        scale="square"
        spacing="md"
      >
        SQUARE
      </Header>
      <Header
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Header>
      <Header
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Header>
      <Header
        scale="rect"
        spacing="md"
      >
        RECT
      </Header>
      <Header
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Header>
      <Header
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Header>
    </ExampleCard>
  </ExampleSection>
);
