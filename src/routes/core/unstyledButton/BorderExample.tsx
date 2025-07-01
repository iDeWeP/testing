import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledButton border={false}>FALSE</ExampleUnstyledButton>
      <ExampleUnstyledButton border>TRUE</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
