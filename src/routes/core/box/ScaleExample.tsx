import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledBox
        size="md"
        scale="normal"
      >
        NORMAL
      </UnstyledBox>
      <UnstyledBox
        size="md"
        scale="fit"
      >
        FIT
      </UnstyledBox>
      <UnstyledBox
        size="md"
        scale="full"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
