import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="text" />
      <Example variant="outlined" />
      <Example variant="light" />
      <Example variant="solid" />
    </ExampleCard>
  </ExampleSection>
);
