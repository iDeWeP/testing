import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapXExample = () => (
  <ExampleSection title="Gap X">
    <ExampleCard col>
      <Example
        col
        gx="none"
      >
        <ExampleBox>NONE #1</ExampleBox>
        <ExampleBox>NONE #2</ExampleBox>
        <ExampleBox>NONE #3</ExampleBox>
      </Example>
      <Example
        col
        gx="xs"
      >
        <ExampleBox>XS #1</ExampleBox>
        <ExampleBox>XS #2</ExampleBox>
        <ExampleBox>XS #3</ExampleBox>
      </Example>
      <Example
        col
        gx="sm"
      >
        <ExampleBox>SM #1</ExampleBox>
        <ExampleBox>SM #2</ExampleBox>
        <ExampleBox>SM #3</ExampleBox>
      </Example>
      <Example
        col
        gx="md"
      >
        <ExampleBox>MD #1</ExampleBox>
        <ExampleBox>MD #2</ExampleBox>
        <ExampleBox>MD #3</ExampleBox>
      </Example>
      <Example
        col
        gx="lg"
      >
        <ExampleBox>LG #1</ExampleBox>
        <ExampleBox>LG #2</ExampleBox>
        <ExampleBox>LG #3</ExampleBox>
      </Example>
      <Example
        col
        gx="xl"
      >
        <ExampleBox>XL #1</ExampleBox>
        <ExampleBox>XL #2</ExampleBox>
        <ExampleBox>XL #3</ExampleBox>
      </Example>
      <Example
        col
        gx="xxl"
      >
        <ExampleBox>XXL #1</ExampleBox>
        <ExampleBox>XXL #2</ExampleBox>
        <ExampleBox>XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
