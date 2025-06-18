import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard align>
      <UnstyledSpinner scale="normal">NORMAL</UnstyledSpinner>
      <UnstyledSpinner scale="inner">INNER</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
