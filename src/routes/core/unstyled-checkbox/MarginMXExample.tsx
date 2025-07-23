import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMXExample = (): ReactNode => (
  <ExampleSection title="Margin MX">
    <ExampleCard>
      <Example mx="unset" />
      <Example mx="none" />
      <Example mx="xs" />
      <Example mx="sm" />
      <Example mx="md" />
      <Example mx="lg" />
      <Example mx="xl" />
      <Example mx="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example mx="unset" />
      <Example mx="none" />
      <Example mx="xs-xs" />
      <Example mx="sm-sm" />
      <Example mx="md-md" />
      <Example mx="lg-lg" />
      <Example mx="xl-xl" />
      <Example mx="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
