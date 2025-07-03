import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <Example border={false}>FALSE</Example>
      <Example border>TRUE</Example>
      <Example border="all">ALL</Example>
      <Example border="x">X</Example>
      <Example border="y">Y</Example>
      <Example border="t">T</Example>
      <Example border="b">B</Example>
      <Example border="l">L</Example>
      <Example border="r">R</Example>
      <Example border="xt">XT</Example>
      <Example border="xb">XB</Example>
      <Example border="yl">YL</Example>
      <Example border="yr">YR</Example>
      <Example border="tl">TL</Example>
      <Example border="tr">TR</Example>
      <Example border="bl">BL</Example>
      <Example border="br">BR</Example>
    </ExampleCard>
  </ExampleSection>
);
