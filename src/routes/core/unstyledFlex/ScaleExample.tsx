import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledFlex
        variant="light"
        scale="normal"
      >
        NORMAL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        scale="fit"
      >
        FIT
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        scale="full"
      >
        FULL
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
