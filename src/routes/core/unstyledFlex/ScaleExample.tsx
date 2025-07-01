import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledFlex
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledFlex>
      <UnstyledFlex
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
