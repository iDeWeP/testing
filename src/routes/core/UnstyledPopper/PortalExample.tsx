import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PortalExample = () => (
  <ExampleSection title="Portal">
    <ExampleCard>
      <Example portalEl={null}>NULL</Example>
      <Example portalEl={document.getElementById('popper')}>EL</Example>
    </ExampleCard>
  </ExampleSection>
);
