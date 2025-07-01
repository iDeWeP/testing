import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const LoadingExample = () => (
  <ExampleSection title="Loading">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        loading={false}
      >
        FALSE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        loading
      >
        TRUE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        loading="left"
      >
        LEFT
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        loading="right"
      >
        RIGHT
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
