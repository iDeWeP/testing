import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderBRExample = (): ReactNode => (
  <ExampleSection title="Border BR">
    <ExampleCard>
      <Example br="unset">UNSET</Example>
      <Example br="none">NONE</Example>
      <Example br="set">SET</Example>
    </ExampleCard>
  </ExampleSection>
);
