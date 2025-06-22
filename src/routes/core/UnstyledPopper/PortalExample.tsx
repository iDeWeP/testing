import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExamplePopper } from './ExamplePopper';

export const PortalExample = () => (
  <ExampleSection title="Portal">
    <ExampleCard>
      <ExamplePopper portalEl={null}>NULL</ExamplePopper>
      <ExamplePopper portalEl={document.getElementById('popper')}>
        EL
      </ExamplePopper>
    </ExampleCard>
  </ExampleSection>
);
