import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledBox
        variant="solid"
        radius="none"
        color="primary"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="xs"
        color="primary"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="sm"
        color="primary"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="md"
        color="primary"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="lg"
        color="primary"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="xl"
        color="primary"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        radius="full"
        color="primary"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
