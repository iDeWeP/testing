import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Section
        scale="square"
        spacing="md"
      >
        SQUARE
      </Section>
      <Section
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </Section>
      <Section
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </Section>
      <Section
        scale="rect"
        spacing="md"
      >
        RECT
      </Section>
      <Section
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </Section>
      <Section
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </Section>
    </ExampleCard>
  </ExampleSection>
);
