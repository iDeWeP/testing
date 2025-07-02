import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopper } from './ExampleUnstyledPopper';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledPopper size="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xs">XS</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="sm">SM</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="md">MD</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="lg">LG</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xl">XL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xxl">XXL</ExampleUnstyledPopper>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledPopper size="none">NONE</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xs-xs">XS-XS</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="sm-sm">SM-SM</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="md-md">MD-MD</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="lg-lg">LG-LG</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xl-xl">XL-XL</ExampleUnstyledPopper>
      <ExampleUnstyledPopper size="xxl-xxl">XXL-XXL</ExampleUnstyledPopper>
    </ExampleCard>
  </ExampleSection>
);
