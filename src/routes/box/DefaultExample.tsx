import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const DefaultExample = () => (
  <ExampleSection title="Default">
    <ExampleCard>
      <Box>Box</Box>
    </ExampleCard>
  </ExampleSection>
);
