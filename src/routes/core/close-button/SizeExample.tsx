import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SizeExample = (): ReactNode => (
  <ExampleSection title="Size">
    <ExampleCard>
      <Example size="xs" />
      <Example size="sm" />
      <Example size="md" />
      <Example size="lg" />
      <Example size="xl" />
      <Example size="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example size="xs-xs" />
      <Example size="sm-sm" />
      <Example size="md-md" />
      <Example size="lg-lg" />
      <Example size="xl-xl" />
      <Example size="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
