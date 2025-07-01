import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { UnstyledGrid } from '../../../core/components/UnstyledGrid/UnstyledGrid';

export const JustifyContentExample = () => (
  <ExampleSection title="JustifyContent">
    <ExampleCard
      vertical
      stretch
    >
      <UnstyledGrid
        variant="none"
        justifyContent="normal"
      >
        <UnstyledBox variant="light">NORMAL #2</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #1</UnstyledBox>
        <UnstyledBox variant="light">NORMAL #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="stretch"
      >
        <UnstyledBox variant="light">STRETCH #2</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #1</UnstyledBox>
        <UnstyledBox variant="light">STRETCH #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="start"
      >
        <UnstyledBox variant="light">START #1</UnstyledBox>
        <UnstyledBox variant="light">START #2</UnstyledBox>
        <UnstyledBox variant="light">START #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="end"
      >
        <UnstyledBox variant="light">END #1</UnstyledBox>
        <UnstyledBox variant="light">END #2</UnstyledBox>
        <UnstyledBox variant="light">END #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="center"
      >
        <UnstyledBox variant="light">CENTER #1</UnstyledBox>
        <UnstyledBox variant="light">CENTER #2</UnstyledBox>
        <UnstyledBox variant="light">CENTER #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="evenly"
      >
        <UnstyledBox variant="light">EVENLY #1</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #2</UnstyledBox>
        <UnstyledBox variant="light">EVENLY #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="between"
      >
        <UnstyledBox variant="light">BETWEEN #1</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #2</UnstyledBox>
        <UnstyledBox variant="light">BETWEEN #3</UnstyledBox>
      </UnstyledGrid>
      <UnstyledGrid
        variant="none"
        justifyContent="around"
      >
        <UnstyledBox variant="light">AROUND #1</UnstyledBox>
        <UnstyledBox variant="light">AROUND #2</UnstyledBox>
        <UnstyledBox variant="light">AROUND #3</UnstyledBox>
      </UnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
