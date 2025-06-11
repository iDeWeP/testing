import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Box scale="default">DEFAULT</Box>
      <Box scale="fit">FIT</Box>
      <Box scale="full">FULL</Box>
    </ExampleCard>
  </ExampleSection>
);
