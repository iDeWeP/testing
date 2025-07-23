import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRExample = (): ReactNode => (
  <ExampleSection title="Radius R">
    <ExampleCard>
      <Example r="unset">UNSET</Example>
      <Example r="none">NONE</Example>
      <Example r="xs">XS</Example>
      <Example r="sm">SM</Example>
      <Example r="md">MD</Example>
      <Example r="lg">LG</Example>
      <Example r="xl">XL</Example>
      <Example r="xxl">XXL</Example>
      <Example r="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
