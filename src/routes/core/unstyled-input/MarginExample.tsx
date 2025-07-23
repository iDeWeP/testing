import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginExample = (): ReactNode => (
  <ExampleSection title="Margin">
    <ExampleCard>
      <Example margin="unset">UNSET</Example>
      <Example margin="none">NONE</Example>
      <Example margin="xs">XS</Example>
      <Example margin="sm">SM</Example>
      <Example margin="md">MD</Example>
      <Example margin="lg">LG</Example>
      <Example margin="xl">XL</Example>
      <Example margin="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example margin="unset">UNSET</Example>
      <Example margin="none">NONE</Example>
      <Example margin="xs-xs">XS-XS</Example>
      <Example margin="sm-sm">SM-SM</Example>
      <Example margin="md-md">MD-MD</Example>
      <Example margin="lg-lg">LG-LG</Example>
      <Example margin="xl-xl">XL-XL</Example>
      <Example margin="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
