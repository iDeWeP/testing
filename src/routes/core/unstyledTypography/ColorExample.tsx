import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const ColorExample = () => (
  <ExampleSection title="Color">
    <ExampleCard>
      <ExampleUnstyledTypography color="surface">
        SURFACE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="neutral">
        NEUTRAL
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="primary">
        PRIMARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="secondary">
        SECONDARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="tertiary">
        TERTIARY
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="success">
        SUCCESS
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="warning">
        WARNING
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography color="error">ERROR</ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
