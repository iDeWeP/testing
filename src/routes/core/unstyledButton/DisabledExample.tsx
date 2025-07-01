import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const DisabledExample = () => (
  <ExampleSection title="Disabled">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        disabled={false}
      >
        FALSE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        disabled
      >
        TRUE
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
