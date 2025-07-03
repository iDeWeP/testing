import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <Example border={false}>FALSE</Example>
    <Example border="all">ALL</Example>
    <Example border="x">X</Example>
    <Example border="y">Y</Example>
    <Example border="top">TOP</Example>
    <Example border="bottom">BOTTOM</Example>
    <Example border="left">LEFT</Example>
    <Example border="right">RIGHT</Example>
  </ExampleSection>
);
