import { ExampleTitle } from '../../../components/ExampleTitle';
import { AlignContentExample } from './AlignContentExample';
import { AlignItemsExample } from './AlignItemsExample';
import { BorderExample } from './BorderExample';
import { ColGapExample } from './ColGapExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { FlowExample } from './FlowExample';
import { GapExample } from './GapExample';
import { JustifyContentExample } from './JustifyContentExample';
import { JustifyItemsExample } from './JustifyItemsExample';
import { MarginExample } from './MarginExample';
import { RadiusExample } from './RadiusExample';
import { RowGapExample } from './RowGapExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>UnstyledGrid</ExampleTitle>
    <DefaultExample />
    <FlowExample />
    <JustifyContentExample />
    <AlignContentExample />
    <JustifyItemsExample />
    <AlignItemsExample />
    <GapExample />
    <ColGapExample />
    <RowGapExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <MarginExample />
    <BorderExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
