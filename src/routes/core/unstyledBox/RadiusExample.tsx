import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const RadiusExample = () => (
  <ExampleSection title="Radius">
    <ExampleCard>
      <ExampleUnstyledBox radius="none">NONE</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="xs">XS</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="sm">SM</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="md">MD</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="lg">LG</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="xl">XL</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="xxl">XXL</ExampleUnstyledBox>
      <ExampleUnstyledBox radius="full">FULL</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
