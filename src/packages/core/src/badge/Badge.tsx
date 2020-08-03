import React from 'react';
import classNames from 'classnames';

import { BadgeProps } from './types';

export function Badge(props: BadgeProps) {
  const {
    appearance = 'default',
    className,
    text = '',
    ...rest
  } = props;

  const badgeClassNames = classNames({
    [`${className}`]: className,
    _e_badge: true,
    _e_badge_appearance_alert: appearance === 'alert',
  });

  return (
    <div className={badgeClassNames} {...rest}>
      { text }
    </div>
  );
}
