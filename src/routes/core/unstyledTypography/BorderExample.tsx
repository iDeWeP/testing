import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledTypography } from './ExampleUnstyledTypography';

export const BorderExample = () => (
  <ExampleSection title="Border">
    <ExampleCard>
      <ExampleUnstyledTypography border={false}>
        FALSE
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="all">ALL</ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="x">X</ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="y">Y</ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="top">TOP</ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="bottom">
        BOTTOM
      </ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="left">LEFT</ExampleUnstyledTypography>
      <ExampleUnstyledTypography border="right">
        RIGHT
      </ExampleUnstyledTypography>
    </ExampleCard>
  </ExampleSection>
);
