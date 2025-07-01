import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const LoadingExample = () => (
  <ExampleSection title="Loading">
    <ExampleCard>
      <ExampleUnstyledButton loading={false}>FALSE</ExampleUnstyledButton>
      <ExampleUnstyledButton loading>TRUE</ExampleUnstyledButton>
      <ExampleUnstyledButton loading="left">LEFT</ExampleUnstyledButton>
      <ExampleUnstyledButton loading="right">RIGHT</ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
