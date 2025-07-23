import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = (): ReactNode => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="text" />
      <Example variant="outlined" />
      <Example variant="light" />
      <Example variant="solid" />
    </ExampleCard>
    <ExampleCard>
      <Example variant="text-text" />
      <Example variant="text-outlined" />
      <Example variant="text-light" />
      <Example variant="text-solid" />
    </ExampleCard>
    <ExampleCard>
      <Example variant="outlined-text" />
      <Example variant="outlined-outlined" />
      <Example variant="outlined-light" />
      <Example variant="outlined-solid" />
    </ExampleCard>
    <ExampleCard>
      <Example variant="light-text" />
      <Example variant="light-outlined" />
      <Example variant="light-light" />
      <Example variant="light-solid" />
    </ExampleCard>
    <ExampleCard>
      <Example variant="solid-text" />
      <Example variant="solid-outlined" />
      <Example variant="solid-light" />
      <Example variant="solid-solid" />
    </ExampleCard>
  </ExampleSection>
);
