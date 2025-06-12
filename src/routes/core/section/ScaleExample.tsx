import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Section
        size="md"
        scale="normal"
      >
        NORMAL
      </Section>
      <Section
        size="md"
        scale="fit"
      >
        FIT
      </Section>
      <Section
        size="md"
        scale="full"
      >
        FULL
      </Section>
    </ExampleCard>
  </ExampleSection>
);
