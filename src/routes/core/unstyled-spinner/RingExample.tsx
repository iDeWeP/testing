import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RingExample = () => (
  <ExampleSection title="Ring">
    <ExampleCard>
      <Example ring="unset">UNSET</Example>
      <Example ring="surface">SURFACE</Example>
      <Example ring="neutral">NEUTRAL</Example>
      <Example ring="primary">PRIMARY</Example>
      <Example ring="secondary">SECONDARY</Example>
      <Example ring="tertiary">TERTIARY</Example>
      <Example ring="success">SUCCESS</Example>
      <Example ring="warning">WARNING</Example>
      <Example ring="error">ERROR</Example>
    </ExampleCard>
    <ExampleCard>
      <Example ring="unset">UNSET</Example>
      <Example ring="surface-on">SURFACE-ON</Example>
      <Example ring="neutral-on">NEUTRAL-ON</Example>
      <Example ring="primary-on">PRIMARY-ON</Example>
      <Example ring="secondary-on">SECONDARY-ON</Example>
      <Example ring="tertiary-on">TERTIARY-ON</Example>
      <Example ring="success-on">SUCCESS-ON</Example>
      <Example ring="warning-on">WARNING-ON</Example>
      <Example ring="error-on">ERROR-ON</Example>
    </ExampleCard>
  </ExampleSection>
);
