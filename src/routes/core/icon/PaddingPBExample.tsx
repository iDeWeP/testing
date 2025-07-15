import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PaddingPBExample = () => (
  <ExampleSection title="Padding PB">
    <ExampleCard>
      <Example pb="unset" />
      <Example pb="none" />
      <Example pb="xs" />
      <Example pb="sm" />
      <Example pb="md" />
      <Example pb="lg" />
      <Example pb="xl" />
      <Example pb="xxl" />
    </ExampleCard>
    <ExampleCard>
      <Example pb="unset" />
      <Example pb="none" />
      <Example pb="xs-xs" />
      <Example pb="sm-sm" />
      <Example pb="md-md" />
      <Example pb="lg-lg" />
      <Example pb="xl-xl" />
      <Example pb="xxl-xxl" />
    </ExampleCard>
  </ExampleSection>
);
