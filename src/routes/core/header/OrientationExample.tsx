import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const OrientationExample = () => (
  <ExampleSection title="Orientation">
    <ExampleCard col>
      <Example orientation="row">
        <ExampleBox>ROW #1</ExampleBox>
        <ExampleBox>ROW #2</ExampleBox>
        <ExampleBox>ROW #3</ExampleBox>
      </Example>
      <Example orientation="col">
        <ExampleBox>COL #1</ExampleBox>
        <ExampleBox>COL #2</ExampleBox>
        <ExampleBox>COL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
