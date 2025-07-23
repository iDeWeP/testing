import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPXExample = (): ReactNode => (
  <ExampleSection title="Padding PX">
    <ExampleCard>
      <Example px="unset">UNSET</Example>
      <Example px="none">NONE</Example>
      <Example px="xs">XS</Example>
      <Example px="sm">SM</Example>
      <Example px="md">MD</Example>
      <Example px="lg">LG</Example>
      <Example px="xl">XL</Example>
      <Example px="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example px="unset">UNSET</Example>
      <Example px="none">NONE</Example>
      <Example px="xs-xs">XS-XS</Example>
      <Example px="sm-sm">SM-SM</Example>
      <Example px="md-md">MD-MD</Example>
      <Example px="lg-lg">LG-LG</Example>
      <Example px="xl-xl">XL-XL</Example>
      <Example px="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
