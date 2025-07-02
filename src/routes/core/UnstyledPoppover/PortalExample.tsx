import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const PortalExample = () => (
  <ExampleSection title="Portal">
    <ExampleCard>
      <ExampleUnstyledPopover portalEl={null}>NULL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover portalEl={document.getElementById('Popover')}>
        EL
      </ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
