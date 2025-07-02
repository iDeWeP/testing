import { ExampleCard } from '../../../components/ExampleCard';
import { ExampleSection } from '../../../components/ExampleSection';
import { ExampleUnstyledPopover } from './ExampleUnstyledPopover';

export const SizeExample = () => (
  <ExampleSection title="Size">
    <ExampleCard>
      <ExampleUnstyledPopover size="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xs">XS</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="sm">SM</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="md">MD</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="lg">LG</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xl">XL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xxl">XXL</ExampleUnstyledPopover>
    </ExampleCard>
    <ExampleCard>
      <ExampleUnstyledPopover size="none">NONE</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xs-xs">XS-XS</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="sm-sm">SM-SM</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="md-md">MD-MD</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="lg-lg">LG-LG</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xl-xl">XL-XL</ExampleUnstyledPopover>
      <ExampleUnstyledPopover size="xxl-xxl">XXL-XXL</ExampleUnstyledPopover>
    </ExampleCard>
  </ExampleSection>
);
