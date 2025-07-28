import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const WidthExample = (): ReactNode => (
  <ExampleSection title="Width">
    <ExampleCard>
      <Example width="default">DEFAULT</Example>
      <Example width="fit">FIT</Example>
      <Example width="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
