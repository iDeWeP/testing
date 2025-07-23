import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPYExample = (): ReactNode => (
  <ExampleSection title="Padding PY">
    <ExampleCard>
      <Example py="unset">UNSET</Example>
      <Example py="none">NONE</Example>
      <Example py="xs">XS</Example>
      <Example py="sm">SM</Example>
      <Example py="md">MD</Example>
      <Example py="lg">LG</Example>
      <Example py="xl">XL</Example>
      <Example py="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example py="unset">UNSET</Example>
      <Example py="none">NONE</Example>
      <Example py="xs-xs">XS-XS</Example>
      <Example py="sm-sm">SM-SM</Example>
      <Example py="md-md">MD-MD</Example>
      <Example py="lg-lg">LG-LG</Example>
      <Example py="xl-xl">XL-XL</Example>
      <Example py="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
