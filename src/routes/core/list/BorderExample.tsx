import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { List } from '../../../core/components/List/List';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <List border="all">ALL</List>
      <List border="x">X</List>
      <List border="y">Y</List>
      <List border="top">TOP</List>
      <List border="bottom">BOTTOM</List>
      <List border="left">LEFT</List>
      <List border="right">RIGHT</List>
    </ExampleCard>
  </ExampleSection>
);
