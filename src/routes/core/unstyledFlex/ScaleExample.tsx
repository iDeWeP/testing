import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledFlex
        light
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        scale="fit"
      >
        FIT
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        scale="full"
      >
        FULL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
