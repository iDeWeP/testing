import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Box border>Box</Box>
    </ExampleCard>
  </ExampleSection>
);
