import type { ReactNode } from "react";
import { ExampleTitle } from "../../../components/ExampleTitle";
import { ColorExample } from "./ColorExample";
import { DefaultExample } from "./DefaultExample";
import { GapExample } from "./GapExample";
import { OrientationExample } from "./OrientationExample";
import { PaddingExample } from "./PaddingExample";
import { PlacementExample } from "./PlacementExample";
import { RadiusExample } from "./RadiusExample";
import { VariantExample } from "./VariantExample";
const Page = (): ReactNode => (
  <>
    <ExampleTitle>CardBody</ExampleTitle>
    <DefaultExample />
    <VariantExample />
    <OrientationExample />
    <PlacementExample />
    <PaddingExample />
    <RadiusExample />
    <ColorExample />
    <GapExample />
  </>
);

export default Page;
