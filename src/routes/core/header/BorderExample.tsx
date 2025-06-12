import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Header } from '../../../core/components/Header/Header';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Header border="all">ALL</Header>
      <Header border="x">X</Header>
      <Header border="y">Y</Header>
      <Header border="top">TOP</Header>
      <Header border="bottom">BOTTOM</Header>
      <Header border="left">LEFT</Header>
      <Header border="right">RIGHT</Header>
    </ExampleCard>
  </ExampleSection>
);
