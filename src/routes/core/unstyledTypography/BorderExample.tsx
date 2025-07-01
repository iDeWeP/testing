import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledTypography
        light
        border={false}
      >
        FALSE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="all"
      >
        ALL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="x"
      >
        X
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="y"
      >
        Y
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="top"
      >
        TOP
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="bottom"
      >
        BOTTOM
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="left"
      >
        LEFT
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography
        light
        border="right"
      >
        RIGHT
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
