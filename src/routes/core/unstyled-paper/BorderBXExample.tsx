import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBXExample = (): ReactNode => (
  <ExampleSection title="Border BX">
    <ExampleCard>
      <Example bx="unset" />
      <Example bx="none" />
      <Example bx="set" />
    </ExampleCard>
  </ExampleSection>
);
