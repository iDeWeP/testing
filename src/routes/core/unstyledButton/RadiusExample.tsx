import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        radius="none"
      >
        NONE
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="xs"
      >
        XS
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="sm"
      >
        SM
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="md"
      >
        MD
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="lg"
      >
        LG
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="xl"
      >
        XL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        radius="full"
      >
        FULL
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
