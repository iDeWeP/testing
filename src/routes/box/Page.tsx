import ExampleTitle from '../../components/ExampleTitle';
import { BorderExample } from './BorderExample';
import { ColorExample } from './ColorExample';
import { DefaultExample } from './DefaultExample';
import { RadiusExample } from './RadiusExample';
import { ScaleExample } from './ScaleExample';
import { SpacingExample } from './SpacingExample';
import { VariantExample } from './VariantExample';

const Page = () => (
  <>
    <ExampleTitle>Box</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <ScaleExample />
    <SpacingExample />
    <BorderExample />
    <RadiusExample />
    <ColorExample />
  </>
);

export default Page;
