import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { List } from '../../../core/components/List/List';

export const WrapExample = () => (
  <ExampleSection title="Wrap">
    <ExampleCard>
      <List wrap="nowrap">
        <Box>Nowrap #1</Box>
        <Box>Nowrap #2</Box>
        <Box>Nowrap #3</Box>
      </List>
      <List wrap="wrap">
        <Box>Wrap #1</Box>
        <Box>Wrap #2</Box>
        <Box>Wrap #3</Box>
      </List>
      <List wrap="wrap-reverse">
        <Box>Wrap-reverse #1</Box>
        <Box>Wrap-reverse #2</Box>
        <Box>Wrap-reverse #3</Box>
      </List>
    </ExampleCard>
  </ExampleSection>
);
