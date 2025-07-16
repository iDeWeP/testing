import { ExampleTitle } from '../../../components/ExampleTitle';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { DisabledExample } from './DisabledExample';
import { EffectExample } from './EffectExample';
import { LoadingExample } from './LoadingExample';
import { PlacementExample } from './PlacementExample';
import { PositionExample } from './PositionExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SizeExample } from './SizeExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Fab</ExampleTitle>
    <DefaultExample />
    <LoadingExample />
    <DisabledExample />
    <PositionExample />
    <PlacementExample />
    <VariantExample />
    <SizeExample />
    <ScaleExample />
    <RadiusExample />
    <ColorExample />
    <EffectExample />
  </>
);

export default Page;
