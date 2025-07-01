import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledBox
        light
        margin="none"
      >
        NONE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="xs"
      >
        XS
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="sm"
      >
        SM
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="md"
      >
        MD
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="lg"
      >
        LG
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="xl"
      >
        XL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        margin="xxl"
      >
        XXL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
