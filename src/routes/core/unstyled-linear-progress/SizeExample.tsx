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
    <ExampleCard>
      <Example size="xs">XS</Example>
      <Example size="sm">SM</Example>
      <Example size="md">MD</Example>
      <Example size="lg">LG</Example>
      <Example size="xl">XL</Example>
      <Example size="xxl">XXL</Example>
    </ExampleCard>
    <ExampleCard>
      <Example size="xs-xs">XS-XS</Example>
      <Example size="sm-sm">SM-SM</Example>
      <Example size="md-md">MD-MD</Example>
      <Example size="lg-lg">LG-LG</Example>
      <Example size="xl-xl">XL-XL</Example>
      <Example size="xxl-xxl">XXL-XXL</Example>
    </ExampleCard>
  </ExampleSection>
);
