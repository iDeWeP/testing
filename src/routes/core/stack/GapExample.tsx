import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapExample = () => (
  <ExampleSection title="Gap">
    <ExampleCard>
      <Example gap="none">
        <ExampleBox>NONE #1</ExampleBox>
        <ExampleBox>NONE #2</ExampleBox>
        <ExampleBox>NONE #3</ExampleBox>
      </Example>
      <Example gap="xs">
        <ExampleBox>XS #1</ExampleBox>
        <ExampleBox>XS #2</ExampleBox>
        <ExampleBox>XS #3</ExampleBox>
      </Example>
      <Example gap="sm">
        <ExampleBox>SM #1</ExampleBox>
        <ExampleBox>SM #2</ExampleBox>
        <ExampleBox>SM #3</ExampleBox>
      </Example>
      <Example gap="md">
        <ExampleBox>MD #1</ExampleBox>
        <ExampleBox>MD #2</ExampleBox>
        <ExampleBox>MD #3</ExampleBox>
      </Example>
      <Example gap="lg">
        <ExampleBox>LG #1</ExampleBox>
        <ExampleBox>LG #2</ExampleBox>
        <ExampleBox>LG #3</ExampleBox>
      </Example>
      <Example gap="xl">
        <ExampleBox>XL #1</ExampleBox>
        <ExampleBox>XL #2</ExampleBox>
        <ExampleBox>XL #3</ExampleBox>
      </Example>
      <Example gap="xxl">
        <ExampleBox>XXL #1</ExampleBox>
        <ExampleBox>XXL #2</ExampleBox>
        <ExampleBox>XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
