import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const SpacingExample = () => (
  <ExampleSection title="Spacing">
    <ExampleCard align>
      <Main size="none">NONE</Main>
      <Main size="xs">XS</Main>
      <Main size="sm">SM</Main>
      <Main size="md">MD</Main>
      <Main size="lg">LG</Main>
      <Main size="xl">XL</Main>
      <Main size="xxl">XXL</Main>
    </ExampleCard>
    <ExampleCard align>
      <Main size="xs-xs">XS-XS</Main>
      <Main size="sm-sm">SM-SM</Main>
      <Main size="md-md">MD-MD</Main>
      <Main size="lg-lg">LG-LG</Main>
      <Main size="xl-xl">XL-XL</Main>
      <Main size="xxl-xxl">XXL-XXL</Main>
    </ExampleCard>
  </ExampleSection>
);
