import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Box scale="default">Default</Box>
      <Box scale="fit">Fit</Box>
      <Box scale="full">Full</Box>
    </ExampleCard>
  </ExampleSection>
);
