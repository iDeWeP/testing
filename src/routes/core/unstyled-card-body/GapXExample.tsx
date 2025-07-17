import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapXExample = () => (
  <ExampleSection title="Gap X">
    <ExampleCard>
      <Example gx="unset">
        <ExampleBox>UNSET #1</ExampleBox>
        <ExampleBox>UNSET #2</ExampleBox>
        <ExampleBox>UNSET #3</ExampleBox>
      </Example>
      <Example gx="none">
        <ExampleBox>NONE #1</ExampleBox>
        <ExampleBox>NONE #2</ExampleBox>
        <ExampleBox>NONE #3</ExampleBox>
      </Example>
      <Example gx="xs">
        <ExampleBox>XS #1</ExampleBox>
        <ExampleBox>XS #2</ExampleBox>
        <ExampleBox>XS #3</ExampleBox>
      </Example>
      <Example gx="sm">
        <ExampleBox>SM #1</ExampleBox>
        <ExampleBox>SM #2</ExampleBox>
        <ExampleBox>SM #3</ExampleBox>
      </Example>
      <Example gx="md">
        <ExampleBox>MD #1</ExampleBox>
        <ExampleBox>MD #2</ExampleBox>
        <ExampleBox>MD #3</ExampleBox>
      </Example>
      <Example gx="lg">
        <ExampleBox>LG #1</ExampleBox>
        <ExampleBox>LG #2</ExampleBox>
        <ExampleBox>LG #3</ExampleBox>
      </Example>
      <Example gx="xl">
        <ExampleBox>XL #1</ExampleBox>
        <ExampleBox>XL #2</ExampleBox>
        <ExampleBox>XL #3</ExampleBox>
      </Example>
      <Example gx="xxl">
        <ExampleBox>XXL #1</ExampleBox>
        <ExampleBox>XXL #2</ExampleBox>
        <ExampleBox>XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
    <ExampleCard>
      <Example gx="unset">
        <ExampleBox>UNSET #1</ExampleBox>
        <ExampleBox>UNSET #2</ExampleBox>
        <ExampleBox>UNSET #3</ExampleBox>
      </Example>
      <Example gx="none">
        <ExampleBox>NONE #1</ExampleBox>
        <ExampleBox>NONE #2</ExampleBox>
        <ExampleBox>NONE #3</ExampleBox>
      </Example>
      <Example gx="xs-xs">
        <ExampleBox>XS-XS #1</ExampleBox>
        <ExampleBox>XS-XS #2</ExampleBox>
        <ExampleBox>XS-XS #3</ExampleBox>
      </Example>
      <Example gx="sm-sm">
        <ExampleBox>SM-SM #1</ExampleBox>
        <ExampleBox>SM-SM #2</ExampleBox>
        <ExampleBox>SM-SM #3</ExampleBox>
      </Example>
      <Example gx="md-md">
        <ExampleBox>MD-MD #1</ExampleBox>
        <ExampleBox>MD-MD #2</ExampleBox>
        <ExampleBox>MD-MD #3</ExampleBox>
      </Example>
      <Example gx="lg-lg">
        <ExampleBox>LG-LG #1</ExampleBox>
        <ExampleBox>LG-LG #2</ExampleBox>
        <ExampleBox>LG-LG #3</ExampleBox>
      </Example>
      <Example gx="xl-xl">
        <ExampleBox>XL-XL #1</ExampleBox>
        <ExampleBox>XL-XL #2</ExampleBox>
        <ExampleBox>XL-XL #3</ExampleBox>
      </Example>
      <Example gx="xxl-xxl">
        <ExampleBox>XXL-XXL #1</ExampleBox>
        <ExampleBox>XXL-XXL #2</ExampleBox>
        <ExampleBox>XXL-XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
