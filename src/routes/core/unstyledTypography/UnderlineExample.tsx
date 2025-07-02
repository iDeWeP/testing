import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const UnderlineExample = () => (
  <ExampleSection title="Underline">
    <ExampleCard>
      <Example underline="normal">NORMAL</Example>
      <Example underline="none">NONE</Example>
      <Example underline="hover">HOVER</Example>
      <Example underline="always">ALWAYS</Example>
    </ExampleCard>
  </ExampleSection>
);
