import React, { type ReactNode, type FC } from 'react';

import Heading from '../lib/idewep/core/components/Heading/Heading';
import Stack from '../lib/idewep/core/components/Stack/Stack';
import {
  type HeadingSize,
  type Gap
} from '../lib/idewep/core/types/generic.types';

interface ExampleContainerProps {
  size?: HeadingSize;
  gap?: Gap;
  id?: string;
  title: string;
  children: ReactNode;
}

const ExampleContainer: FC<ExampleContainerProps> = ({
  size = '6',
  gap = 'md',
  id,
  title,
  children
}) => (
  <Stack gap={gap}>
    <Heading
      size={size}
      id={id}
    >
      {title}
    </Heading>
    {children}
  </Stack>
);

export default ExampleContainer;
