import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const MarginExample = () => (
  <ExampleSection title="Margin">
    <ExampleCard align>
      <ExampleUnstyledBox margin="none">NONE</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="xs">XS</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="sm">SM</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="md">MD</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="lg">LG</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="xl">XL</ExampleUnstyledBox>
      <ExampleUnstyledBox margin="xxl">XXL</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
