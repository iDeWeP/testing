import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ShowZeroExample = (): ReactNode => (
  <ExampleSection title="ShowZero">
    <ExampleCard>
      <Example showZero={false}>0</Example>
      <Example showZero>0</Example>
    </ExampleCard>
  </ExampleSection>
);
