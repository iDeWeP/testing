import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledButton } from './ExampleUnstyledButton';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledButton
        light
        size="xs"
      >
        XS
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        size="sm"
      >
        SM
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        size="md"
      >
        MD
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        size="lg"
      >
        LG
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        size="xl"
      >
        XL
      </ExampleUnstyledButton>
      <ExampleUnstyledButton
        light
        size="xxl"
      >
        XXL
      </ExampleUnstyledButton>
    </ExampleCard>
  </ExampleSection>
);
