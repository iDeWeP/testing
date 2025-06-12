import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Card } from '../../../core/components/Card/Card';

export const JustifyExample = () => (
  <ExampleSection title="Justify">
    <ExampleCard
      vertical
      stretch
    >
      <Card justify="normal">
        <Box>Normal #2</Box>
        <Box>Normal #1</Box>
        <Box>Normal #3</Box>
      </Card>
      <Card justify="stretch">
        <Box>Stretch #2</Box>
        <Box>Stretch #1</Box>
        <Box>Stretch #3</Box>
      </Card>
      <Card justify="start">
        <Box>Start #1</Box>
        <Box>Start #2</Box>
        <Box>Start #3</Box>
      </Card>
      <Card justify="end">
        <Box>End #1</Box>
        <Box>End #2</Box>
        <Box>End #3</Box>
      </Card>
      <Card justify="center">
        <Box>Center #1</Box>
        <Box>Center #2</Box>
        <Box>Center #3</Box>
      </Card>
      <Card justify="evenly">
        <Box>Evenly #1</Box>
        <Box>Evenly #2</Box>
        <Box>Evenly #3</Box>
      </Card>
      <Card justify="between">
        <Box>Between #1</Box>
        <Box>Between #2</Box>
        <Box>Between #3</Box>
      </Card>
      <Card justify="around">
        <Box>Around #1</Box>
        <Box>Around #2</Box>
        <Box>Around #3</Box>
      </Card>
    </ExampleCard>
  </ExampleSection>
);
