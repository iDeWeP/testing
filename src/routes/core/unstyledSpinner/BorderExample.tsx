import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledSpinner } from './ExampleUnstyledSpinner';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledSpinner border={false}>FALSE</ExampleUnstyledSpinner>
      <ExampleUnstyledSpinner border={true}>TRUE</ExampleUnstyledSpinner>
    </ExampleCard>
  </ExampleSection>
);
