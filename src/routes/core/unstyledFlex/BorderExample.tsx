import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledFlex
        light
        border={false}
      >
        FALSE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="all"
      >
        ALL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="x"
      >
        X
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="y"
      >
        Y
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="top"
      >
        TOP
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="bottom"
      >
        BOTTOM
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="left"
      >
        LEFT
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        border="right"
      >
        RIGHT
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
