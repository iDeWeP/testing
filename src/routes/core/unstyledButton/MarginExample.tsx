import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledButton
        light
        margin="none"
      >
        NONE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="xs"
      >
        XS
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="sm"
      >
        SM
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="md"
      >
        MD
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="lg"
      >
        LG
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="xl"
      >
        XL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        margin="xxl"
      >
        XXL
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
