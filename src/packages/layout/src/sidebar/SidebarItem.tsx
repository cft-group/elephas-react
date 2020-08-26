import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '@elephas/react-core';

import { SidebarItemProps } from './types';

export function SidebarItem(props: SidebarItemProps) {
  const {
    active = false,
    badge,
    className,
    component: Component = 'a',
    icon,
    text,
    ...rest
  } = props;

  const sidebarItemClassNames = classNames({
    [`${className}`]: className,
    '_e_sidebar-item': true,
    '_e_sidebar-item_active': active,
  });

  return (
    <Component className={sidebarItemClassNames} {...rest}>
      <div className="_e_sidebar-item__icon">
        { icon }
      </div>
      <div className="_e_sidebar-item__text">{ text }</div>
      <Tooltip className="_e_sidebar-item__tooltip" position="right">{ text }</Tooltip>
      { badge && (
        <div className="_e_sidebar-item__badge">
          { badge }
        </div>
      ) }
    </Component>
  );
}
