import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <Header margin="none">NONE</Header>
      <Header margin="xs">XS</Header>
      <Header margin="sm">SM</Header>
      <Header margin="md">MD</Header>
      <Header margin="lg">LG</Header>
      <Header margin="xl">XL</Header>
      <Header margin="xxl">XXL</Header>
    </ExampleCard>
  </ExampleSection>
);
