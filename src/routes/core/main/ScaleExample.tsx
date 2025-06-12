import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Main
        scale="square"
        spacing="md"
      >
        SQUARE
      </Main>
      <Main
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Main>
      <Main
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Main>
      <Main
        scale="rect"
        spacing="md"
      >
        RECT
      </Main>
      <Main
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Main>
      <Main
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Main>
    </ExampleCard>
  </ExampleSection>
);
