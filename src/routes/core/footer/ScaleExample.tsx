import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Footer
        scale="square"
        spacing="md"
      >
        SQUARE
      </Footer>
      <Footer
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Footer>
      <Footer
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Footer>
      <Footer
        scale="rect"
        spacing="md"
      >
        RECT
      </Footer>
      <Footer
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Footer>
      <Footer
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
