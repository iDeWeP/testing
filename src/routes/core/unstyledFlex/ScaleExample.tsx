import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <ExampleUnstyledFlex scale="normal">NORMAL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex scale="fit">FIT</ExampleUnstyledFlex>
      <ExampleUnstyledFlex scale="full">FULL</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
