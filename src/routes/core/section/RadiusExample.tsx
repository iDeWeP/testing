import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Section
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </Section>
      <Section
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </Section>
      <Section
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </Section>
      <Section
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </Section>
      <Section
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </Section>
      <Section
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </Section>
      <Section
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </Section>
    </ExampleCard>
  </ExampleSection>
);
