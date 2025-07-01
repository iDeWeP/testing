import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledSpinner margin="none">NONE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="xs">XS</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="sm">SM</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="md">MD</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="lg">LG</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="xl">XL</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner margin="xxl">XXL</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
