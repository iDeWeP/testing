import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <Main radius="none">NONE</Main>
      <Main radius="xs">XS</Main>
      <Main radius="sm">SM</Main>
      <Main radius="md">MD</Main>
      <Main radius="lg">LG</Main>
      <Main radius="xl">XL</Main>
      <Main radius="full">FULL</Main>
    </ExampleCard>
  </ExampleSection>
);
