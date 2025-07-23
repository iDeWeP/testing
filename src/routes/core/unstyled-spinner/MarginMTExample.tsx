import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMTExample = (): ReactNode => (
  <ExampleSection title="Margin MT">
    <ExampleCard>
      <Example mt="unset">UNSET</Example>
      <Example mt="none">NONE</Example>
      <Example mt="xs">XS</Example>
      <Example mt="sm">SM</Example>
      <Example mt="md">MD</Example>
      <Example mt="lg">LG</Example>
      <Example mt="xl">XL</Example>
      <Example mt="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example mt="unset">UNSET</Example>
      <Example mt="none">NONE</Example>
      <Example mt="xs-xs">XS-XS</Example>
      <Example mt="sm-sm">SM-SM</Example>
      <Example mt="md-md">MD-MD</Example>
      <Example mt="lg-lg">LG-LG</Example>
      <Example mt="xl-xl">XL-XL</Example>
      <Example mt="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
