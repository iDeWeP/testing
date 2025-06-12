import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Footer } from '../../../core/components/Footer/Footer';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <Footer wrap="nowrap">
        <Box>Nowrap #1</Box>
        <Box>Nowrap #2</Box>
        <Box>Nowrap #3</Box>
      </Footer>
      <Footer wrap="wrap">
        <Box>Wrap #1</Box>
        <Box>Wrap #2</Box>
        <Box>Wrap #3</Box>
      </Footer>
      <Footer wrap="wrap-reverse">
        <Box>Wrap-reverse #1</Box>
        <Box>Wrap-reverse #2</Box>
        <Box>Wrap-reverse #3</Box>
      </Footer>
    </ExampleCard>
  </ExampleSection>
);
