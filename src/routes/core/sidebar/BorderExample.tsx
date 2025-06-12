import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Sidebar } from '../../../core/components/Sidebar/Sidebar';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Sidebar border="all">ALL</Sidebar>
      <Sidebar border="x">X</Sidebar>
      <Sidebar border="y">Y</Sidebar>
      <Sidebar border="top">TOP</Sidebar>
      <Sidebar border="bottom">BOTTOM</Sidebar>
      <Sidebar border="left">LEFT</Sidebar>
      <Sidebar border="right">RIGHT</Sidebar>
    </ExampleCard>
  </ExampleSection>
);
