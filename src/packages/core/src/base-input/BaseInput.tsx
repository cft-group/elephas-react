import React, { cloneElement } from 'react';
import classNames from 'classnames';

import { BaseInputProps, HTMLAttributesComposite } from './types';

export function BaseInput<T extends HTMLAttributesComposite>(props: BaseInputProps<T>) {
  const {
    appearance = 'default',
    children,
    className,
    error,
    hint,
    label,
    width = '100%',
    icons,
    ...rest
  } = props;

  const inputClassNames = classNames({
    [`${className}`]: className,
    _e_input: true,
    [`_e_input_size_${width}`]: width !== '100%',
    [`_e_input_appearance_${appearance}`]: appearance !== 'default',
  });

  return (
    <div className={inputClassNames}>
      {/* Should pass a11y lint according to https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="_e_input__field">
        {
          cloneElement<T>(children, {
            className: '_e_input__control',
            disabled: appearance === 'disabled',
            placeholder: ' ',
            readOnly: appearance === 'readonly',
            ...rest,
          })
         }
        <span className="_e_input__label">
          { label }
        </span>
        <span className="_e_input__background" />
        <span className="_e_input__line" />
        { icons && (
          <div className="_e_input__icon">
            { icons }
          </div>
        )}
      </label>
      {
        hint
        && appearance !== 'error'
        && <span className="_e_input__hint">{ hint }</span>
      }
      {
        error
        && appearance === 'error'
        && <span className="_e_input__hint">{ error }</span>
      }
    </div>
  );
}
