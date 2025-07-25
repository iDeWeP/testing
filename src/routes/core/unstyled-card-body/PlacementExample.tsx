import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = (): ReactNode => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <Example
        variant="outlined"
        placement="default"
        padding="md"
      >
        DEFAULT
      </Example>
      <Example
        variant="outlined"
        placement="center"
        padding="md"
      >
        CENTER
      </Example>
      <Example
        variant="outlined"
        placement="top"
        padding="md"
      >
        TOP
      </Example>
      <Example
        variant="outlined"
        placement="bottom"
        padding="md"
      >
        BOTTOM
      </Example>
    </ExampleCard>
  </ExampleSection>
);
