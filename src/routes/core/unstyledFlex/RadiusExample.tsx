import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledFlex
        variant="light"
        radius="none"
      >
        NONE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="xs"
      >
        XS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="sm"
      >
        SM
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="md"
      >
        MD
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="lg"
      >
        LG
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="xl"
      >
        XL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        radius="full"
      >
        FULL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
