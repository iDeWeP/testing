import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const VariantExample = (): ReactNode => (
  <ExampleSection title="Variant">
    <ExampleCard>
      <Example variant="text">TEXT</Example>
      <Example variant="outlined">OUTLINED</Example>
      <Example variant="light">LIGHT</Example>
      <Example variant="solid">SOLID</Example>
    </ExampleCard>
    <ExampleCard>
      <Example variant="text-text">TEXT-TEXT</Example>
      <Example variant="text-outlined">TEXT-OUTLINED</Example>
      <Example variant="text-light">TEXT-LIGHT</Example>
      <Example variant="text-solid">TEXT-SOLID</Example>
    </ExampleCard>
    <ExampleCard>
      <Example variant="outlined-text">OUTLINED-TEXT</Example>
      <Example variant="outlined-outlined">OUTLINED-OUTLINED</Example>
      <Example variant="outlined-light">OUTLINED-LIGHT</Example>
      <Example variant="outlined-solid">OUTLINED-SOLID</Example>
    </ExampleCard>
    <ExampleCard>
      <Example variant="light-text">LIGHT-TEXT</Example>
      <Example variant="light-outlined">LIGHT-OUTLINED</Example>
      <Example variant="light-light">LIGHT-LIGHT</Example>
      <Example variant="light-solid">LIGHT-SOLID</Example>
    </ExampleCard>
    <ExampleCard>
      <Example variant="solid-text">SOLID-TEXT</Example>
      <Example variant="solid-outlined">SOLID-OUTLINED</Example>
      <Example variant="solid-light">SOLID-LIGHT</Example>
      <Example variant="solid-solid">SOLID-SOLID</Example>
    </ExampleCard>
  </ExampleSection>
);
