import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledBox
        variant="light"
        scale="normal"
      >
        NORMAL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        scale="fit"
      >
        FIT
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        scale="full"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
