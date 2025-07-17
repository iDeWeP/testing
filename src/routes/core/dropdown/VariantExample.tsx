import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="text">TEXT</Example>
      <Example variant="outlined">OUTLINED</Example>
      <Example variant="light">LIGHT</Example>
      <Example variant="solid">SOLID</Example>
    </ExampleCard>
  </ExampleSection>
);
