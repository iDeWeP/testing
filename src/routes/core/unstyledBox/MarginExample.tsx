import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledBox
        variant="light"
        margin="none"
      >
        NONE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="xs"
      >
        XS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="sm"
      >
        SM
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="md"
      >
        MD
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="lg"
      >
        LG
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="xl"
      >
        XL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        margin="xxl"
      >
        XXL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
