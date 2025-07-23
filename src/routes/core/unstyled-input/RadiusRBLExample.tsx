import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRBLExample = (): ReactNode => (
  <ExampleSection title="Radius RBL">
    <ExampleCard>
      <Example rbl="unset" />
      <Example rbl="none" />
      <Example rbl="xs" />
      <Example rbl="sm" />
      <Example rbl="md" />
      <Example rbl="lg" />
      <Example rbl="xl" />
      <Example rbl="xxl" />
      <Example rbl="full" />
    </ExampleCard>
  </ExampleSection>
);
