import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        scale="fit"
      >
        FIT
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        scale="full"
      >
        FULL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        scale="square"
      >
        SQUARE
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
