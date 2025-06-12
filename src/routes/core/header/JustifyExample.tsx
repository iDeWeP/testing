import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Box } from '../../../core/components/Box/Box';
import { Header } from '../../../core/components/Header/Header';

export const JustifyExample = () => (
  <ExampleSection title="Justify">
    <ExampleCard
      vertical
      stretch
    >
      <Header justify="normal">
        <Box>Normal #2</Box>
        <Box>Normal #1</Box>
        <Box>Normal #3</Box>
      </Header>
      <Header justify="stretch">
        <Box>Stretch #2</Box>
        <Box>Stretch #1</Box>
        <Box>Stretch #3</Box>
      </Header>
      <Header justify="start">
        <Box>Start #1</Box>
        <Box>Start #2</Box>
        <Box>Start #3</Box>
      </Header>
      <Header justify="end">
        <Box>End #1</Box>
        <Box>End #2</Box>
        <Box>End #3</Box>
      </Header>
      <Header justify="center">
        <Box>Center #1</Box>
        <Box>Center #2</Box>
        <Box>Center #3</Box>
      </Header>
      <Header justify="evenly">
        <Box>Evenly #1</Box>
        <Box>Evenly #2</Box>
        <Box>Evenly #3</Box>
      </Header>
      <Header justify="between">
        <Box>Between #1</Box>
        <Box>Between #2</Box>
        <Box>Between #3</Box>
      </Header>
      <Header justify="around">
        <Box>Around #1</Box>
        <Box>Around #2</Box>
        <Box>Around #3</Box>
      </Header>
    </ExampleCard>
  </ExampleSection>
);
