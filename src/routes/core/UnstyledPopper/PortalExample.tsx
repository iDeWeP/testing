import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const PortalExample = () => (
  <ExampleSection title="Portal">
    <ExampleCard>
      <ExampleUnstyledPopper portalEl={null}>NULL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper portalEl={document.getElementById('popper')}>
        EL
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
