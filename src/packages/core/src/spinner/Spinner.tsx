import React from 'react';
import classNames from 'classnames';

import { SpinnerProps } from './types';

export function Spinner(props: SpinnerProps) {
  const {
    className,
    ...rest
  } = props;

  const spinnerClassNames = classNames({
    [`${className}`]: className,
    _e_spinner: true,
  });

  return (
    <div className={spinnerClassNames} {...rest}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
