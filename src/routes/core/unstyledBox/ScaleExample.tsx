import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledBox
        light
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        scale="fit"
      >
        FIT
      </ExampleUnstyledBox>
      <ExampleUnstyledBox
        light
        scale="full"
      >
        FULL
      </ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
