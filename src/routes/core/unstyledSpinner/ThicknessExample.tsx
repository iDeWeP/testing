import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const ThicknessExample = () => (
  <ExampleSection title="Thickness">
    <ExampleCard>
      <ExampleUnstyledSpinner thickness={8}>8</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
