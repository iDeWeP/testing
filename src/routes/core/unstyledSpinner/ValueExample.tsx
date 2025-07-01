import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const ValueExample = () => (
  <ExampleSection title="Value">
    <ExampleCard>
      <ExampleUnstyledSpinner value={50}>50</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
