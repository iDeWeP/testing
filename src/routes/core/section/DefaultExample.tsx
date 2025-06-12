import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Section>Section</Section>
    </ExampleCard>
  </ExampleSection>
);
