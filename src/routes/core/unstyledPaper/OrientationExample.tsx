import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledPaper } from './ExampleUnstyledPaper';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <ExampleUnstyledPaper orientation="horizontal">
        <UnstyledBox variant="light">HORIZONTAL #1</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #2</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #3</UnstyledBox>
      </ExampleUnstyledPaper>
      <ExampleUnstyledPaper orientation="vertical">
        <UnstyledBox variant="light">VERTICAL #1</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #2</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #3</UnstyledBox>
      </ExampleUnstyledPaper>
    </ExampleCard>
  </ExampleSection>
);
