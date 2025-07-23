import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const MarginMYExample = (): ReactNode => (
  <ExampleSection title="Margin MY">
    <ExampleCard>
      <Example my="unset">UNSET</Example>
      <Example my="none">NONE</Example>
      <Example my="xs">XS</Example>
      <Example my="sm">SM</Example>
      <Example my="md">MD</Example>
      <Example my="lg">LG</Example>
      <Example my="xl">XL</Example>
      <Example my="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example my="unset">UNSET</Example>
      <Example my="none">NONE</Example>
      <Example my="xs-xs">XS-XS</Example>
      <Example my="sm-sm">SM-SM</Example>
      <Example my="md-md">MD-MD</Example>
      <Example my="lg-lg">LG-LG</Example>
      <Example my="xl-xl">XL-XL</Example>
      <Example my="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
