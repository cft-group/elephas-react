import React from 'react';
import classNames from 'classnames';

import { ActionProps } from './types';

export function Action(props: ActionProps) {
  const {
    children,
    className,
    icon,
    onClick,
    ...rest
  } = props;

  const actionClassNames = classNames({
    [`${className}`]: className,
    _e_action: true,
  });

  return (
    <button
      className={actionClassNames}
      onClick={onClick}
      type="button"
      {...rest}
    >
      <div className="_e_action__icon">{ icon }</div>
      <div className="_e_action__text">{ children }</div>
    </button>
  );
}
