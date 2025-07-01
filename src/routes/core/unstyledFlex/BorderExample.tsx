import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledFlex
        variant="none"
        border={false}
      >
        FALSE
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="all"
      >
        ALL
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="x"
      >
        X
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="y"
      >
        Y
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="top"
      >
        TOP
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="bottom"
      >
        BOTTOM
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="left"
      >
        LEFT
      </UnstyledFlex>
      <UnstyledFlex
        variant="none"
        border="right"
      >
        RIGHT
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
