import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledFlex } from '../../../core/components/UnstyledFlex/UnstyledFlex';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <UnstyledFlex>UNSTYLED-FLEX-BOX</UnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
