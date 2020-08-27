import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

export function Button(props: ButtonProps) {
  const {
    appearance = 'default',
    disabled = false,
    children,
    className,
    size = 'default',
    type = 'button',
    ...rest
  } = props;

  const buttonClassNames = classNames({
    [`${className}`]: className,
    _e_button: true,
    _e_button_disabled: disabled,
    _e_button_appearance_danger: appearance === 'danger',
    _e_button_appearance_primary: appearance === 'primary',
    _e_button_size_small: size === 'small',
    _e_button_size_large: size === 'large',
  });

  return (
    <button
      className={buttonClassNames}
      disabled={disabled}
      // https://github.com/yannickcr/eslint-plugin-react/issues/1555
      // eslint-disable-next-line react/button-has-type
      type={type}
      {...rest}
    >
      { children }
    </button>
  );
}
