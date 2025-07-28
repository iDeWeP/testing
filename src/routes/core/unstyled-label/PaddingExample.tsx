import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingExample = (): ReactNode => (
  <ExampleSection title="Padding">
    <ExampleCard>
      <Example padding="unset">UNSET</Example>
      <Example padding="none">NONE</Example>
      <Example padding="xs">XS</Example>
      <Example padding="sm">SM</Example>
      <Example padding="md">MD</Example>
      <Example padding="lg">LG</Example>
      <Example padding="xl">XL</Example>
      <Example padding="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example padding="unset">UNSET</Example>
      <Example padding="none">NONE</Example>
      <Example padding="xs-xs">XS-XS</Example>
      <Example padding="sm-sm">SM-SM</Example>
      <Example padding="md-md">MD-MD</Example>
      <Example padding="lg-lg">LG-LG</Example>
      <Example padding="xl-xl">XL-XL</Example>
      <Example padding="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
