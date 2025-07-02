import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledGrid } from './ExampleUnstyledGrid';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledGrid size="none">NONE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xs">XS</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="sm">SM</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="md">MD</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="lg">LG</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xl">XL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xxl">XXL</ExampleUnstyledGrid>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledGrid size="none">NONE</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xs-xs">XS-XS</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="sm-sm">SM-SM</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="md-md">MD-MD</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="lg-lg">LG-LG</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xl-xl">XL-XL</ExampleUnstyledGrid>
      <ExampleUnstyledGrid size="xxl-xxl">XXL-XXL</ExampleUnstyledGrid>
    </ExampleCard>
  </ExampleSection>
);
