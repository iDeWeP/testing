import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleFlex } from '../../../components/ExampleFlex';
import { ExampleSection } from '../../../components/ExampleSection';
import { Example } from './Example';

export const PlacementExample = () => (
  <ExampleSection title="Placement">
    <ExampleCard>
      <ExampleFlex>
        <Example placement="top-start">
          TOP-START
        </Example>
        <Example placement="top">TOP</Example>
        <Example placement="top-end">
          TOP-END
        </Example>
      </ExampleFlex>
      <ExampleFlex>
        <Example placement="bottom-start">
          BOTTOM-START
        </Example>
        <Example placement="bottom">BOTTOM</Example>
        <Example placement="bottom-end">
          BOTTOM-END
        </Example>
      </ExampleFlex>
      <ExampleFlex>
        <Example placement="left-start">
          LEFT-START
        </Example>
        <Example placement="left">LEFT</Example>
        <Example placement="left-end">
          LEFT-END
        </Example>
      </ExampleFlex>
      <ExampleFlex>
        <Example placement="right-start">
          RIGHT-START
        </Example>
        <Example placement="right">RIGHT</Example>
        <Example placement="right-end">
          RIGHT-END
        </Example>
      </ExampleFlex>
    </ExampleCard>
  </ExampleSection>
);
