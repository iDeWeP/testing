import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="default" />
      <Example variant="outlined" />
      <Example variant="light" />
    </ExampleCard>
  </ExampleSection>
);
