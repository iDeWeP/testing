import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledBox
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="all"
      >
        ALL
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="x"
      >
        X
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="y"
      >
        Y
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="top"
      >
        TOP
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="bottom"
      >
        BOTTOM
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="left"
      >
        LEFT
      </UnstyledBox>
      <UnstyledBox
        variant="none"
        border="right"
      >
        RIGHT
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
