import { ExampleTitle } from "../../../components/ExampleTitle";
import { BorderExample } from "./BorderExample";
import { ColorExample } from "./ColorExample";
import { DefaultExample } from "./DefaultExample";
import { DisabledExample } from "./DisabledExample";
import { FloatExample } from "./FloatExample";
import { MarginBExample } from "./MarginBExample";
import { MarginExample } from "./MarginExample";
import { MarginLExample } from "./MarginLExample";
import { MarginRExample } from "./MarginRExample";
import { MarginTExample } from "./MarginTExample";
import { MarginXExample } from "./MarginXExample";
import { MarginYExample } from "./MarginYExample";
import { SizeExample } from "./SizeExample";
import { SpinExample } from "./SpinExample";
import { ThicknessExample } from "./ThicknessExample";
import { ValueExample } from "./ValueExample";
import { VariantExample } from "./VariantExample";


const Page = () => (
  <>
    <ExampleTitle>UnstyledSpinner</ExampleTitle>
    <DefaultExample />
    <DisabledExample />
    <SpinExample />
    <ValueExample />
    <VariantExample />
    <FloatExample />
    <SizeExample />
    <ThicknessExample />
    <MarginExample />
    <MarginXExample />
    <MarginYExample />
    <MarginTExample />
    <MarginBExample />
    <MarginLExample />
    <MarginRExample />
    <BorderExample />
    <ColorExample />
  </>
);

export default Page;
