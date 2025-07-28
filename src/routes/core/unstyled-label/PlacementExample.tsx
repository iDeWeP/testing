import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = (): ReactNode => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example
        placement="top"
        label="LABEL"
      >
        TOP
      </Example>
      <Example
        placement="bottom"
        label="LABEL"
      >
        BOTTOM
      </Example>
      <Example
        placement="left"
        label="LABEL"
      >
        LEFT
      </Example>
      <Example
        placement="right"
        label="LABEL"
      >
        RIGHT
      </Example>
    </ExampleCard>
  </ExampleSection>
);
