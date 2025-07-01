import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledSpinner scale="normal">NORNAL</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner scale="text">TEXT</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
