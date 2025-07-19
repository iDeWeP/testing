import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RingExample = () => (
  <ExampleSection title="Ring">
    <ExampleCard>
      <Example ring="unset" />
      <Example ring="surface" />
      <Example ring="neutral" />
      <Example ring="primary" />
      <Example ring="secondary" />
      <Example ring="tertiary" />
      <Example ring="success" />
      <Example ring="warning" />
      <Example ring="error" />
    </ExampleCard>
    <ExampleCard>
      <Example ring="unset" />
      <Example ring="surface-on" />
      <Example ring="neutral-on" />
      <Example ring="primary-on" />
      <Example ring="secondary-on" />
      <Example ring="tertiary-on" />
      <Example ring="success-on" />
      <Example ring="warning-on" />
      <Example ring="error-on" />
    </ExampleCard>
  </ExampleSection>
);
