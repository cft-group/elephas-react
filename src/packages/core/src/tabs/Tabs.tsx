import React from 'react';
import classNames from 'classnames';

import { TabsProps } from './types';

export function Tabs(props: TabsProps) {
  const {
    children,
    className,
    ...rest
  } = props;

  const tabsClassNames = classNames({
    [`${className}`]: className,
    _e_tabs: true,
  });

  return (
    <nav className={tabsClassNames} {...rest}>
      { children }
    </nav>
  );
}
