import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledFlex } from './ExampleUnstyledFlex';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledFlex size="none">NONE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xs">XS</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="sm">SM</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="md">MD</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="lg">LG</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xl">XL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xxl">XXL</ExampleUnstyledFlex>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledFlex size="none">NONE</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xs-xs">XS-XS</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="sm-sm">SM-SM</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="md-md">MD-MD</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="lg-lg">LG-LG</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xl-xl">XL-XL</ExampleUnstyledFlex>
      <ExampleUnstyledFlex size="xxl-xxl">XXL-XXL</ExampleUnstyledFlex>
    </ExampleCard>
  </ExampleSection>
);
