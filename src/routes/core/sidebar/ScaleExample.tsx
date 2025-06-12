import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Sidebar
        scale="square"
        spacing="md"
      >
        SQUARE
      </Sidebar>
      <Sidebar
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Sidebar>
      <Sidebar
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Sidebar>
      <Sidebar
        scale="rect"
        spacing="md"
      >
        RECT
      </Sidebar>
      <Sidebar
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Sidebar>
      <Sidebar
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Sidebar>
    </ExampleCard>
  </ExampleSection>
);
