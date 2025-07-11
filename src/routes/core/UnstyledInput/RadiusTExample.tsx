import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const RadiusTExample = () => (
  <ExampleSection title="Radius T">
    <ExampleCard>
      <Example rt="unset" />
      <Example rt="none" />
      <Example rt="xs" />
      <Example rt="sm" />
      <Example rt="md" />
      <Example rt="lg" />
      <Example rt="xl" />
      <Example rt="xxl" />
      <Example rt="full" />
    </ExampleCard>
  </ExampleSection>
);
