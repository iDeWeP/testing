import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledButton scale="normal">NORMAL</ExampleUnstyledButton>
      <ExampleUnstyledButton scale="fit">FIT</ExampleUnstyledButton>
      <ExampleUnstyledButton scale="full">FULL</ExampleUnstyledButton>
      <ExampleUnstyledButton scale="square">SQUARE</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
