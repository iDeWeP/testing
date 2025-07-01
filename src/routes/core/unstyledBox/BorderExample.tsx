import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledBox
        light
        border={false}
      >
        FALSE
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="all"
      >
        ALL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="x"
      >
        X
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="y"
      >
        Y
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="top"
      >
        TOP
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="bottom"
      >
        BOTTOM
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="left"
      >
        LEFT
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        border="right"
      >
        RIGHT
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
