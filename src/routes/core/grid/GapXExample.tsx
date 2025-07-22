import type { ReactNode } from 'react';
import { ExampleBox } from '../../../components/ExampleBox';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const GapXExample = (): ReactNode => (
  <ExampleSection title="Gap X">
    <ExampleCard col>
      <Example
        col
        gx="unset"
      >
        <ExampleBox>UNSET #1</ExampleBox>
        <ExampleBox>UNSET #2</ExampleBox>
        <ExampleBox>UNSET #3</ExampleBox>
      </Example>
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
    <ExampleCard col>
      <Example
        col
        gx="unset"
      >
        <ExampleBox>UNSET #1</ExampleBox>
        <ExampleBox>UNSET #2</ExampleBox>
        <ExampleBox>UNSET #3</ExampleBox>
      </Example>
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
        gx="xs-xs"
      >
        <ExampleBox>XS-XS #1</ExampleBox>
        <ExampleBox>XS-XS #2</ExampleBox>
        <ExampleBox>XS-XS #3</ExampleBox>
      </Example>
      <Example
        col
        gx="sm-sm"
      >
        <ExampleBox>SM-SM #1</ExampleBox>
        <ExampleBox>SM-SM #2</ExampleBox>
        <ExampleBox>SM-SM #3</ExampleBox>
      </Example>
      <Example
        col
        gx="md-md"
      >
        <ExampleBox>MD-MD #1</ExampleBox>
        <ExampleBox>MD-MD #2</ExampleBox>
        <ExampleBox>MD-MD #3</ExampleBox>
      </Example>
      <Example
        col
        gx="lg-lg"
      >
        <ExampleBox>LG-LG #1</ExampleBox>
        <ExampleBox>LG-LG #2</ExampleBox>
        <ExampleBox>LG-LG #3</ExampleBox>
      </Example>
      <Example
        col
        gx="xl-xl"
      >
        <ExampleBox>XL-XL #1</ExampleBox>
        <ExampleBox>XL-XL #2</ExampleBox>
        <ExampleBox>XL-XL #3</ExampleBox>
      </Example>
      <Example
        col
        gx="xxl-xxl"
      >
        <ExampleBox>XXL-XXL #1</ExampleBox>
        <ExampleBox>XXL-XXL #2</ExampleBox>
        <ExampleBox>XXL-XXL #3</ExampleBox>
      </Example>
    </ExampleCard>
  </ExampleSection>
);
