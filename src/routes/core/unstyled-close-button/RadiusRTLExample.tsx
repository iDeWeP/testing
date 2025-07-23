import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRTLExample = (): ReactNode => (
  <ExampleSection title="Radius RTL">
    <ExampleCard>
      <Example rtl="unset" />
      <Example rtl="none" />
      <Example rtl="xs" />
      <Example rtl="sm" />
      <Example rtl="md" />
      <Example rtl="lg" />
      <Example rtl="xl" />
      <Example rtl="xxl" />
      <Example rtl="full" />
    </ExampleCard>
  </ExampleSection>
);
