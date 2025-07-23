import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const FloatExample = (): ReactNode => (
  <ExampleSection title="Float">
    <ExampleCard>
      <Example float={false}>FALSE</Example>
      <Example float>TRUE</Example>
    </ExampleCard>
  </ExampleSection>
);
