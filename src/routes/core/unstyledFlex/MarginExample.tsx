import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledFlex
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="md"
      >
        MD
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
