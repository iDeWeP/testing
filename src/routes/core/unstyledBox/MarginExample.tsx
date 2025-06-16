import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledBox
        variant="solid"
        margin="none"
        color="primary"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xs"
        color="primary"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="sm"
        color="primary"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="md"
        color="primary"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="lg"
        color="primary"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xl"
        color="primary"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        margin="xxl"
        color="primary"
      >
        XXL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
