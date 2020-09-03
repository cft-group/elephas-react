import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames';

import { RadioProps } from './types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>((props: RadioProps, ref: Ref<HTMLInputElement>) => {
  const {
    className,
    defaultChecked,
    disabled = false,
    id,
    label,
    readonly = false,
    ...rest
  } = props;

  const radioClassNames = classNames({
    [`${className}`]: className,
    _e_radio: true,
    _e_radio_disabled: disabled || readonly,
  });

  return (
    <label
      className={radioClassNames}
      htmlFor={id}
    >
      <input
        className="_e_radio__input"
        defaultChecked={defaultChecked}
        disabled={disabled || readonly}
        id={id}
        readOnly={readonly}
        ref={ref}
        type="radio"
        {...rest}
      />
      <span className="_e_radio__icon" />
      <span className="_e_radio__label">
        { label }
      </span>
    </label>
  );
});
