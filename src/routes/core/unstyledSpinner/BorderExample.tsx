import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledSpinner border={false}>FALSE</UnstyledSpinner>
      <UnstyledSpinner border={true}>TRUE</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
