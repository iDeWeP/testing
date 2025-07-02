import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledBox scale="normal">NORMAL</ExampleUnstyledBox>
      <ExampleUnstyledBox scale="fit">FIT</ExampleUnstyledBox>
      <ExampleUnstyledBox scale="full">FULL</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
