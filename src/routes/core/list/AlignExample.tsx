import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { List } from '../../../core/components/List/List';

export const AlignExample = () => (
  <ExampleSection title="Align">
    <ExampleCard>
      <List align="stretch">
        <Box>STRETCH #2</Box>
        <Box>STRETCH #1</Box>
        <Box>STRETCH #3</Box>
      </List>
      <List align="start">
        <Box>START #1</Box>
        <Box>START #2</Box>
        <Box>START #3</Box>
      </List>
      <List align="end">
        <Box>END #1</Box>
        <Box>END #2</Box>
        <Box>END #3</Box>
      </List>
      <List align="center">
        <Box>CENTER #1</Box>
        <Box>CENTER #2</Box>
        <Box>CENTER #3</Box>
      </List>
      <List align="baseline">
        <Box>BASELINE #1</Box>
        <Box>BASELINE #2</Box>
        <Box>BASELINE #3</Box>
      </List>
    </ExampleCard>
  </ExampleSection>
);
