import React from 'react';
import classNames from 'classnames';

import { SidebarProps } from './types';

export function Sidebar(props: SidebarProps) {
  const {
    bottom,
    children,
    className,
    collapsed = false,
    ...rest
  } = props;

  const sidebarClassNames = classNames({
    [`${className}`]: className,
    _e_sidebar: true,
    _e_sidebar_collapsed: collapsed,
  });

  return (
    <nav className={sidebarClassNames} {...rest}>
      <section className="_e_sidebar__top">
        { children }
      </section>
      <section className="_e_sidebar__bottom">
        { bottom }
      </section>
    </nav>
  );
}
