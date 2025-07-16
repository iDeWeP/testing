import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <Example color="unset" />
      <Example color="surface" />
      <Example color="neutral" />
      <Example color="primary" />
      <Example color="secondary" />
      <Example color="tertiary" />
      <Example color="success" />
      <Example color="warning" />
      <Example color="error" />
    </ExampleCard>
    <ExampleCard>
      <Example color="unset" />
      <Example color="surface-on" />
      <Example color="neutral-on" />
      <Example color="primary-on" />
      <Example color="secondary-on" />
      <Example color="tertiary-on" />
      <Example color="success-on" />
      <Example color="warning-on" />
      <Example color="error-on" />
    </ExampleCard>
  </ExampleSection>
);
