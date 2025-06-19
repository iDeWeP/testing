import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledBox
        variant="light"
        scale="normal"
        color="neutral"
      >
        NORMAL
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        scale="fit"
        color="neutral"
      >
        FIT
      </UnstyledBox>
      <UnstyledBox
        variant="light"
        scale="full"
        color="neutral"
      >
        FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
