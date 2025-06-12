import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Header } from '../../../core/components/Header/Header';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <Header wrap="nowrap">
        <Box>Nowrap #1</Box>
        <Box>Nowrap #2</Box>
        <Box>Nowrap #3</Box>
      </Header>
      <Header wrap="wrap">
        <Box>Wrap #1</Box>
        <Box>Wrap #2</Box>
        <Box>Wrap #3</Box>
      </Header>
      <Header wrap="wrap-reverse">
        <Box>Wrap-reverse #1</Box>
        <Box>Wrap-reverse #2</Box>
        <Box>Wrap-reverse #3</Box>
      </Header>
    </ExampleCard>
  </ExampleSection>
);
