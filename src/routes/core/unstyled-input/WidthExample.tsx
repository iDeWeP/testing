import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const WidthExample = (): ReactNode => (
  <ExampleSection title="Width">
    <ExampleCard>
      <Example width="default" />
      <Example width="fit" />
      <Example width="full" />
    </ExampleCard>
  </ExampleSection>
);
