import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledFlex
        light
        radius="none"
      >
        NONE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="xs"
      >
        XS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="sm"
      >
        SM
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="md"
      >
        MD
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="lg"
      >
        LG
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="xl"
      >
        XL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="xxl"
      >
        XXL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        radius="full"
      >
        FULL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
