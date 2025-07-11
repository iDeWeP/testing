import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PeakExample = () => (
  <ExampleSection title="Peak">
    <ExampleCard>
      <Example peak={50}>50</Example>
    </ExampleCard>
  </ExampleSection>
);
