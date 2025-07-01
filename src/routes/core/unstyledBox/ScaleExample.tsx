import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledBox
        variant="light"
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        scale="fit"
      >
        FIT
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        variant="light"
        scale="full"
      >
        FULL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
