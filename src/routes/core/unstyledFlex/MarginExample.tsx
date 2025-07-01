import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledFlex
        variant="light"
        margin="none"
      >
        NONE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="xs"
      >
        XS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="sm"
      >
        SM
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="md"
      >
        MD
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="lg"
      >
        LG
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="xl"
      >
        XL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        margin="xxl"
      >
        XXL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
