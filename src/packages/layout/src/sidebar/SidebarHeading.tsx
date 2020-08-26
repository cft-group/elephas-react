import React from 'react';
import classNames from 'classnames';
import { Tooltip } from '@elephas/react-core';

import { SidebarHeadingProps } from './types';

export function SidebarHeading(props: SidebarHeadingProps) {
  const {
    className,
    component: Component = 'a',
    text,
    tooltip,
    ...rest
  } = props;

  const sidebarHeadingClassNames = classNames({
    [`${className}`]: className,
    '_e_sidebar-item': true,
    '_e_sidebar-item_heading': true,
  });

  return (
    <section className={sidebarHeadingClassNames}>
      <Component className="_e_sidebar-item__icon" {...rest}>
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          {/* eslint-disable-next-line max-len */}
          <path d="M18.7912 11.005H7.62124L12.5012 6.12499C12.8912 5.73499 12.8912 5.09499 12.5012 4.70499C12.3144 4.51774 12.0608 4.41251 11.7962 4.41251C11.5317 4.41251 11.2781 4.51774 11.0912 4.70499L4.50124 11.295C4.11124 11.685 4.11124 12.315 4.50124 12.705L11.0912 19.295C11.4812 19.685 12.1112 19.685 12.5012 19.295C12.8912 18.905 12.8912 18.275 12.5012 17.885L7.62124 13.005H18.7912C19.3412 13.005 19.7912 12.555 19.7912 12.005C19.7912 11.455 19.3412 11.005 18.7912 11.005Z" />
        </svg>
      </Component>
      <div className="_e_sidebar-item__text">{ text }</div>
      <Tooltip className="_e_sidebar-item__tooltip" position="right">
        { tooltip }
      </Tooltip>
    </section>
  );
}
