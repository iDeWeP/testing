import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledFlex
        variant="light"
        color="surface"
      >
        SURFACE
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="neutral"
      >
        NEUTRAL
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="primary"
      >
        PRIMARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="secondary"
      >
        SECONDARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="tertiary"
      >
        TERTIARY
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="success"
      >
        SUCCESS
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="warning"
      >
        WARNING
      </ExampleUnstyledFlex>
      <ExampleUnstyledFlex
        variant="light"
        color="error"
      >
        ERROR
      </ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
