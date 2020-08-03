import React from 'react';
import classNames from 'classnames';

import { TooltipProps } from './types';

export function Tooltip(props: TooltipProps) {
  const {
    children,
    className,
    position,
    ...rest
  } = props;

  const tooltipClassNames = classNames({
    [`${className}`]: className,
    _e_tooltip: true,
    [`_e_tooltip_${position}`]: true,
  });

  return (
    <div className={tooltipClassNames} {...rest}>
      { children }
    </div>
  );
}
