import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <UnstyledBox
        variant="light"
        margin="none"
      >
        NONE
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xs"
      >
        XS
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="sm"
      >
        SM
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="md"
      >
        MD
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="lg"
      >
        LG
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xl"
      >
        XL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        margin="xxl"
      >
        XXL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
