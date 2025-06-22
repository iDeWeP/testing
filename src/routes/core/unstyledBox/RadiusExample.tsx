import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledBox
        variant="light"
        radius="none"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="xs"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="sm"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="md"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="lg"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="xl"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="full"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
