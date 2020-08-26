import React from 'react';
import classNames from 'classnames';

import { SidebarDividerProps } from './types';

export function SidebarDivider(props: SidebarDividerProps) {
  const {
    className,
    ...rest
  } = props;

  const sidebarDividerClassNames = classNames({
    [`${className}`]: className,
    _e_sidebar__divider: true,
  });

  return (
    <div className={sidebarDividerClassNames} {...rest} />
  );
}
