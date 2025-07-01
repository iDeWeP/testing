import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        color="surface"
      >
        SURFACE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="success"
      >
        SUCCESS
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="warning"
      >
        WARNING
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        color="error"
      >
        ERROR
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
