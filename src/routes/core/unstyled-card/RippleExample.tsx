import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RippleExample = (): ReactNode => (
  <ExampleSection title="Ripple">
    <ExampleCard>
      <Example ripple="none">NONE</Example>
      <Example ripple="default">DEFAULT</Example>
    </ExampleCard>
  </ExampleSection>
);
