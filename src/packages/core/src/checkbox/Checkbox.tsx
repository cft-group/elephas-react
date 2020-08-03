/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames';

import { CheckboxProps } from './types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props: CheckboxProps, ref: Ref<HTMLInputElement>) => {
    const {
      checked,
      className,
      defaultChecked,
      disabled = false,
      id,
      label,
      name = '',
      onChange,
      readonly = false,
      required,
      value = '',
      ...rest
    } = props;

    const checkboxClassNames = classNames({
      [`${className}`]: className,
      _e_checkbox: true,
      _e_checkbox_disabled: disabled || readonly,
    });

    return (
      <label
        className={checkboxClassNames}
        htmlFor={id}
      >
        <input
          aria-readonly={readonly}
          checked={checked}
          className="_e_checkbox__input"
          defaultChecked={defaultChecked}
          disabled={disabled || readonly}
          id={id}
          name={name}
          onChange={onChange}
          ref={ref}
          required={required}
          type="checkbox"
          value={value}
          {...rest}
        />
        <span className="_e_checkbox__icon" />
        <span className="_e_checkbox__label">
          { label }
        </span>
      </label>
    );
  },
);
