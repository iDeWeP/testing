import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledSpinner } from '../../../core/components/UnstyledSpinner/UnstyledSpinner';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledSpinner scale="normal">NORNAL</UnstyledSpinner>
      <UnstyledSpinner scale="text">TEXT</UnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
