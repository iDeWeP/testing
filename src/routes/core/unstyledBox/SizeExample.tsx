import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledBox } from './ExampleUnstyledBox';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledBox size="none">NONE</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xs">XS</ExampleUnstyledBox>
      <ExampleUnstyledBox size="sm">SM</ExampleUnstyledBox>
      <ExampleUnstyledBox size="md">MD</ExampleUnstyledBox>
      <ExampleUnstyledBox size="lg">LG</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xl">XL</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xxl">XXL</ExampleUnstyledBox>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledBox size="none">NONE</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xs-xs">XS-XS</ExampleUnstyledBox>
      <ExampleUnstyledBox size="sm-sm">SM-SM</ExampleUnstyledBox>
      <ExampleUnstyledBox size="md-md">MD-MD</ExampleUnstyledBox>
      <ExampleUnstyledBox size="lg-lg">LG-LG</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xl-xl">XL-XL</ExampleUnstyledBox>
      <ExampleUnstyledBox size="xxl-xxl">XXL-XXL</ExampleUnstyledBox>
    </ExampleCard>
  </ExampleSection>
);
