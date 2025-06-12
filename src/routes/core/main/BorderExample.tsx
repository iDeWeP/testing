import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Main } from '../../../core/components/Main/Main';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Main border="all">ALL</Main>
      <Main border="x">X</Main>
      <Main border="y">Y</Main>
      <Main border="top">TOP</Main>
      <Main border="bottom">BOTTOM</Main>
      <Main border="left">LEFT</Main>
      <Main border="right">RIGHT</Main>
    </ExampleCard>
  </ExampleSection>
);
