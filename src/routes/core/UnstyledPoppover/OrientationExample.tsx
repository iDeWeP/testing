import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard>
      <ExampleUnstyledPopover orientation="horizontal">
        <UnstyledBox variant="light">HORIZONTAL #1</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #2</UnstyledBox>
        <UnstyledBox variant="light">HORIZONTAL #3</UnstyledBox>
      </ExampleUnstyledPopover>
      <ExampleUnstyledPopover orientation="vertical">
        <UnstyledBox variant="light">VERTICAL #1</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #2</UnstyledBox>
        <UnstyledBox variant="light">VERTICAL #3</UnstyledBox>
      </ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
