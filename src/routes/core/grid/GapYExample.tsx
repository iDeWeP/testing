import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapYExample = () => (
  <ExampleSection title="Gap Y">
    <ExampleCard>
      <Example gy="none">
        <ExampleBox>NONE #1</ExampleBox>
        <ExampleBox>NONE #2</ExampleBox>
        <ExampleBox>NONE #3</ExampleBox>
      </Example>
      <Example gy="xs">
        <ExampleBox>XS #1</ExampleBox>
        <ExampleBox>XS #2</ExampleBox>
        <ExampleBox>XS #3</ExampleBox>
      </Example>
      <Example gy="sm">
        <ExampleBox>SM #1</ExampleBox>
        <ExampleBox>SM #2</ExampleBox>
        <ExampleBox>SM #3</ExampleBox>
      </Example>
      <Example gy="md">
        <ExampleBox>MD #1</ExampleBox>
        <ExampleBox>MD #2</ExampleBox>
        <ExampleBox>MD #3</ExampleBox>
      </Example>
      <Example gy="lg">
        <ExampleBox>LG #1</ExampleBox>
        <ExampleBox>LG #2</ExampleBox>
        <ExampleBox>LG #3</ExampleBox>
      </Example>
      <Example gy="xl">
        <ExampleBox>XL #1</ExampleBox>
        <ExampleBox>XL #2</ExampleBox>
        <ExampleBox>XL #3</ExampleBox>
      </Example>
      <Example gy="xxl">
        <ExampleBox>XXL #1</ExampleBox>
        <ExampleBox>XXL #2</ExampleBox>
        <ExampleBox>XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
