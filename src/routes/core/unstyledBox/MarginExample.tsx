import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledBox
        variant="solid"
        margin="none"
        color="neutral"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xs"
        color="neutral"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="sm"
        color="neutral"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="md"
        color="neutral"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="lg"
        color="neutral"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xl"
        color="neutral"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xxl"
        color="neutral"
      >
        XXL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
