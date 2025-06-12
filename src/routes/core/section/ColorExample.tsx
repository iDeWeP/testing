import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Section
        variant="solid"
        color="neutral"
      >
        NEUTRAL
      </Section>
      <Section
        variant="solid"
        color="primary"
      >
        PRIMARY
      </Section>
      <Section
        variant="solid"
        color="secondary"
      >
        SECONDARY
      </Section>
      <Section
        variant="solid"
        color="tertiary"
      >
        TERTIARY
      </Section>
      <Section
        variant="solid"
        color="success"
      >
        SUCCESS
      </Section>
      <Section
        variant="solid"
        color="warning"
      >
        WARNING
      </Section>
      <Section
        variant="solid"
        color="error"
      >
        ERROR
      </Section>
    </ExampleCard>
  </ExampleSection>
);
