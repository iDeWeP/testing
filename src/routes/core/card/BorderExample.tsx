import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Card } from '../../../core/components/Card/Card';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Card border="all">ALL</Card>
      <Card border="x">X</Card>
      <Card border="y">Y</Card>
      <Card border="top">TOP</Card>
      <Card border="bottom">BOTTOM</Card>
      <Card border="left">LEFT</Card>
      <Card border="right">RIGHT</Card>
    </ExampleCard>
  </ExampleSection>
);
