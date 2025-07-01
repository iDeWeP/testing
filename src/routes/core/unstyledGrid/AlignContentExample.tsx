import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const AlignContentExample = () => (
  <ExampleSection title="Align content">
    <ExampleCard>
      <ExampleUnstyledGrid alignContent="normal">
        <UnstyledBox variant="light">NORMAL #2</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #1</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="stretch">
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="start">
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="end">
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="center">
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="evenly">
        <UnstyledBox variant="light">EVENLY #1</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #2</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="between">
        <UnstyledBox variant="light">BETWEEN #1</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #2</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="around">
        <UnstyledBox variant="light">AROUND #1</UnstyledBox>
        <UnstyledBox variant="light">AROUND #2</UnstyledBox>
        <UnstyledBox variant="light">AROUND #3</UnstyledBox>
      </ExampleUnstyledGrid>
      <ExampleUnstyledGrid alignContent="baseline">
        <UnstyledBox variant="light">BASELINE #1</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #2</UnstyledBox>
        <UnstyledBox variant="light">BASELINE #3</UnstyledBox>
      </ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
