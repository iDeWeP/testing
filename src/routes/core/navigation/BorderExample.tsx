import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Navigation } from '../../../core/components/Navigation/Navigation';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Navigation border="all">ALL</Navigation>
      <Navigation border="x">X</Navigation>
      <Navigation border="y">Y</Navigation>
      <Navigation border="top">TOP</Navigation>
      <Navigation border="bottom">BOTTOM</Navigation>
      <Navigation border="left">LEFT</Navigation>
      <Navigation border="right">RIGHT</Navigation>
    </ExampleCard>
  </ExampleSection>
);
