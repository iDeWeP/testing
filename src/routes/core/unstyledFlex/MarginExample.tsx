import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledFlex
        light
        margin="none"
      >
        NONE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="xs"
      >
        XS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="sm"
      >
        SM
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="md"
      >
        MD
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="lg"
      >
        LG
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="xl"
      >
        XL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        margin="xxl"
      >
        XXL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
