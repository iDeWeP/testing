import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledBox
        variant="solid"
        size="md"
        scale="normal"
        color="primary"
      >
        NORMAL
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        size="md"
        scale="fit"
        color="primary"
      >
        FIT
      </UnstyledBox>
      <UnstyledBox
        variant="solid"
        size="md"
        scale="full"
        color="primary"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
