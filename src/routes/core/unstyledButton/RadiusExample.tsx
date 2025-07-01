import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledButton radius="none">NONE</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="xs">XS</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="sm">SM</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="md">MD</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="lg">LG</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="xl">XL</ExampleUnstyledButton>
      <ExampleUnstyledButton radius="full">FULL</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
