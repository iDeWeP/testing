import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Main spacing="none">NONE</Main>
      <Main spacing="xs">XS</Main>
      <Main spacing="sm">SM</Main>
      <Main spacing="md">MD</Main>
      <Main spacing="lg">LG</Main>
      <Main spacing="xl">XL</Main>
    </ExampleCard>
  </ExampleSection>
);
