import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const SizeExample = (): ReactNode => (
  <ExampleSection title="Size">
    <ExampleCard>
      <Example size="xs">XS</Example>
      <Example size="sm">SM</Example>
      <Example size="md">MD</Example>
      <Example size="lg">LG</Example>
      <Example size="xl">XL</Example>
      <Example size="xxl">XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
