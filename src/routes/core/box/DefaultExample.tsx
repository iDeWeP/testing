import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <UnstyledBox>UnstyledBox</UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
