import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledBox
        variant="light"
        margin="none"
        color="neutral"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xs"
        color="neutral"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="sm"
        color="neutral"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="md"
        color="neutral"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="lg"
        color="neutral"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xl"
        color="neutral"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xxl"
        color="neutral"
      >
        XXL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
