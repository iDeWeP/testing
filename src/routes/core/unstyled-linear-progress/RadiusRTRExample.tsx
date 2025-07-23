import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusRTRExample = (): ReactNode => (
  <ExampleSection title="Radius RTR">
    <ExampleCard>
      <Example rtr="unset">UNSET</Example>
      <Example rtr="none">NONE</Example>
      <Example rtr="xs">XS</Example>
      <Example rtr="sm">SM</Example>
      <Example rtr="md">MD</Example>
      <Example rtr="lg">LG</Example>
      <Example rtr="xl">XL</Example>
      <Example rtr="xxl">XXL</Example>
      <Example rtr="full">FULL</Example>
    </ExampleCard>
  </ExampleSection>
);
