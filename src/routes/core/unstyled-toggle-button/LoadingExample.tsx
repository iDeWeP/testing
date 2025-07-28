import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const LoadingExample = (): ReactNode => (
  <ExampleSection title="Loading">
    <ExampleCard>
      <Example loading={false}>FALSE</Example>
      <Example loading>TRUE</Example>
      <Example loading="left">LEFT</Example>
      <Example loading="right">RIGHT</Example>
    </ExampleCard>
  </ExampleSection>
);
