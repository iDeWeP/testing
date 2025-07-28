import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ClickableExample = (): ReactNode => (
  <ExampleSection title="Clickable">
    <ExampleCard>
      <Example clickable={false}>FALSE</Example>
      <Example clickable>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
