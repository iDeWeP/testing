import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Footer } from '../../../core/components/Footer/Footer';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Footer border="all">ALL</Footer>
      <Footer border="x">X</Footer>
      <Footer border="y">Y</Footer>
      <Footer border="top">TOP</Footer>
      <Footer border="bottom">BOTTOM</Footer>
      <Footer border="left">LEFT</Footer>
      <Footer border="right">RIGHT</Footer>
    </ExampleCard>
  </ExampleSection>
);
