import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRTExample = (): ReactNode => (
  <ExampleSection title="Radius RT">
    <ExampleCard>
      <Example rt="unset" />
      <Example rt="none" />
      <Example rt="xs" />
      <Example rt="sm" />
      <Example rt="md" />
      <Example rt="lg" />
      <Example rt="xl" />
      <Example rt="xxl" />
      <Example rt="full" />
    </ExampleCard>
  </ExampleSection>
);
