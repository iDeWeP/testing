import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <UnstyledBox
        variant="light"
        radius="none"
        color="neutral"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="xs"
        color="neutral"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="sm"
        color="neutral"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="md"
        color="neutral"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="lg"
        color="neutral"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="xl"
        color="neutral"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        radius="full"
        color="neutral"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
