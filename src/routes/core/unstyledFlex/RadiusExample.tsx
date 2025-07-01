import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledFlex
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="md"
      >
        MD
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
