import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <ExampleUnstyledPopper orientation="horizontal">
        <UnstyledBox variant="light">HORIZONTAL #1</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #2</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #3</UnstyledBox>
      </ExampleUnstyledPopper>
      <ExampleUnstyledPopper orientation="vertical">
        <UnstyledBox variant="light">VERTICAL #1</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #2</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #3</UnstyledBox>
      </ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
