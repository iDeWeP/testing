import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <ExampleUnstyledFlex clear />
    </ExampleCard>
  </ExampleSection>
);
