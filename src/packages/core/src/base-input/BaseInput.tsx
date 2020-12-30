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
    placeholder = '',
    width = '100%',
    icons,
    isIconPassive = false,
    ...rest
  } = props;

  const inputClassNames = classNames({
    [`${className}`]: className,
    _e_input: true,
    _e_input_labelless: !label,
    [`_e_input_size_${width}`]: width !== '100%',
    [`_e_input_appearance_${appearance}`]: appearance !== 'default',
  });

  const inputIconClassNames = classNames({
    _e_input__icon: true,
    _e_input__icon_passive: isIconPassive,
  });

  return (
    <div className={inputClassNames}>
      {/* Should pass a11y lint according to https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md */}
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label className="_e_input__field">
        {
          cloneElement<T>(children, {
            className: '_e_input__control',
            disabled: appearance === 'disabled' || (children.type === 'select' && appearance === 'readonly'),
            placeholder: label ? ' ' : placeholder,
            readOnly: appearance === 'readonly' && children.type !== 'select',
            ...rest,
          })
         }
        { label && (
          <span className="_e_input__label">
            { label }
          </span>
        )}
        <span className="_e_input__background" />
        <span className="_e_input__line" />
        { icons && (
          <div className={inputIconClassNames}>
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
