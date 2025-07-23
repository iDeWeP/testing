import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ThicknessExample = (): ReactNode => (
  <ExampleSection title="Thickness">
    <ExampleCard>
      <Example thickness={8}>8</Example>
    </ExampleCard>
  </ExampleSection>
);
