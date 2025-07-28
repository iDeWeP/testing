import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = (): ReactNode => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="default">DEFAULT</Example>
      <Example variant="outlined">OUTLINED</Example>
      <Example variant="light">LIGHT</Example>
    </ExampleCard>
  </ExampleSection>
);
