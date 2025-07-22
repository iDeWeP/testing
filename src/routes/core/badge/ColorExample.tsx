import type { ReactNode } from 'react';
import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ColorExample = (): ReactNode => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Example color="unset">UNSET</Example>
      <Example color="surface">SURFACE</Example>
      <Example color="neutral">NEUTRAL</Example>
      <Example color="primary">PRIMARY</Example>
      <Example color="secondary">SECONDARY</Example>
      <Example color="tertiary">TERTIARY</Example>
      <Example color="success">SUCCESS</Example>
      <Example color="warning">WARNING</Example>
      <Example color="error">ERROR</Example>
    </ExampleCard>
    <ExampleCard>
      <Example color="unset">UNSET</Example>
      <Example color="surface-on">SURFACE-ON</Example>
      <Example color="neutral-on">NEUTRAL-ON</Example>
      <Example color="primary-on">PRIMARY-ON</Example>
      <Example color="secondary-on">SECONDARY-ON</Example>
      <Example color="tertiary-on">TERTIARY-ON</Example>
      <Example color="success-on">SUCCESS-ON</Example>
      <Example color="warning-on">WARNING-ON</Example>
      <Example color="error-on">ERROR-ON</Example>
    </ExampleCard>
  </ExampleSection>
);
