import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <UnstyledBox border="all">ALL</UnstyledBox>
      <UnstyledBox border="x">X</UnstyledBox>
      <UnstyledBox border="y">Y</UnstyledBox>
      <UnstyledBox border="top">TOP</UnstyledBox>
      <UnstyledBox border="bottom">BOTTOM</UnstyledBox>
      <UnstyledBox border="left">LEFT</UnstyledBox>
      <UnstyledBox border="right">RIGHT</UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
