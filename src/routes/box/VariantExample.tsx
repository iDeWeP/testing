import ExampleCard from '../../components/ExampleCard';
import ExampleSection from '../../components/ExampleSection';
import { Box } from '../../core/components/Box/Box';

export const VariantExample = () => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Box variant="plain" color="primary">
        Plain
      </Box>
      <Box variant="text" color="primary">
        Text
      </Box>
      <Box variant="soft" color="primary">
        Soft
      </Box>
      <Box variant="default" color="primary">
        Default
      </Box>
      <Box variant="surface" color="primary">
        Surface
      </Box>
      <Box variant="solid" color="primary">
        Solid
      </Box>
    </ExampleCard>
  </ExampleSection>
);
