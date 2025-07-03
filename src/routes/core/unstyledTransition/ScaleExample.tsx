import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <Example scale="normal">NORMAL</Example>
    <Example scale="fit">FIT</Example>
    <Example scale="full">FULL</Example>
  </ExampleSection>
);
