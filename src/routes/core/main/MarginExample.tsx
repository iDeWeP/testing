import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Main margin="none">NONE</Main>
      <Main margin="xs">XS</Main>
      <Main margin="sm">SM</Main>
      <Main margin="md">MD</Main>
      <Main margin="lg">LG</Main>
      <Main margin="xl">XL</Main>
      <Main margin="xxl">XXL</Main>
    </ExampleCard>
  </ExampleSection>
);
