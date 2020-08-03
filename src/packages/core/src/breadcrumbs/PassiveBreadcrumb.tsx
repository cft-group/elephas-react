import React from 'react';

import { PassiveBreadcrumbProps } from './types';

export function PassiveBreadcrumb(props: PassiveBreadcrumbProps) {
  const {
    children,
  } = props;

  return (
    <span className="_e_breadcrumbs__item _e_breadcrumbs__item_passive">
      { children }
    </span>
  );
}
