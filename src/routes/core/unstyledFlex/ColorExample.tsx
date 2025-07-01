import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledFlex
        light
        color="surface"
      >
        SURFACE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="success"
      >
        SUCCESS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="warning"
      >
        WARNING
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        light
        color="error"
      >
        ERROR
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
