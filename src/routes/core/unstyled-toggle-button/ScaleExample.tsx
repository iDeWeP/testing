import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = (): ReactNode => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <Example scale="default">DEFAULT</Example>
      <Example scale="square">SQUARE</Example>
    </ExampleCard>
  </ExampleSection>
);
