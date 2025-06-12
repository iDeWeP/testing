import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Section } from '../../../core/components/Section/Section';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Section border="all">ALL</Section>
      <Section border="x">X</Section>
      <Section border="y">Y</Section>
      <Section border="top">TOP</Section>
      <Section border="bottom">BOTTOM</Section>
      <Section border="left">LEFT</Section>
      <Section border="right">RIGHT</Section>
    </ExampleCard>
  </ExampleSection>
);
