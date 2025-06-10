import React, { type ReactNode, type FC } from 'react';

import Heading from '../lib/idewep/core/components/Heading/Heading';

interface MainTitleProps {
  children: ReactNode;
}

const MainTitle: FC<MainTitleProps> = (props) => (
  <Heading
    size="1"
    color="primary"
    {...props}
  />
);

export default MainTitle;
