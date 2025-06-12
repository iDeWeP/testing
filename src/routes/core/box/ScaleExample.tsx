import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { UnstyledBox } from '../../../core/components/UnstyledBox/UnstyledBox';

export const ScaleExample = () => (
  <ExampleSection title="Scale">
    <ExampleCard>
      <UnstyledBox
        scale="square"
        spacing="md"
      >
        SQUARE
      </UnstyledBox>
      <UnstyledBox
        scale="square-fit"
        spacing="md"
      >
        SQUARE-FIT
      </UnstyledBox>
      <UnstyledBox
        scale="square-full"
        spacing="md"
      >
        SQUARE-FULL
      </UnstyledBox>
      <UnstyledBox
        scale="rect"
        spacing="md"
      >
        RECT
      </UnstyledBox>
      <UnstyledBox
        scale="rect-fit"
        spacing="md"
      >
        RECT-FIT
      </UnstyledBox>
      <UnstyledBox
        scale="rect-full"
        spacing="md"
      >
        RECT-FULL
      </UnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
