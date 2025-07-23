import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames';
import { BaseInput } from '../base-input';
import { DropdownProps } from './types';

const ArrowIcon = (
  <div className="_e_select__arrow">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M8.33031 11.8617L11.2159 14.6815C11.6504 15.1062 12.3523 15.1062 12.7868 14.6815L15.6724 11.8617C16.3743 11.1758 15.873 10 14.8814 10H9.11021C8.11863 10 7.62841 11.1758 8.33031 11.8617Z" />
    </svg>
  </div>
);

export const Dropdown = forwardRef<HTMLInputElement, DropdownProps>(
  (props: DropdownProps, ref: Ref<HTMLInputElement>) => {
    const {
      className,
      label,
      options,
      value,
      id,
      name,
      required,
      defaultValue,
      onChange,
      ...rest
    } = props;

    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : defaultValue;

    const dropdownClassName = classNames(
      '_e_select',
      '_e_dropdown',
      className,
    );

    const selectedOption = options.find((option) => option.value === currentValue);

    return (
      <BaseInput
        label={label}
        {...rest}
        readOnly
        icons={ArrowIcon}
        isIconPassive
        className={dropdownClassName}
      >
        <>
          <input
            ref={ref}
            className="_e_input__control"
            placeholder=" "
            disabled={rest.appearance === 'disabled'}
            readOnly
            value={selectedOption?.title ?? ''}
            id={id}
            name={name}
            required={required}
          />
          <div className="_e_dropdown__card" style={rest.appearance === 'readonly' ? { display: 'none' } : {}}>
            {options.map((item) => (
              <div
                tabIndex={0}
                role="button"
                key={item.value}
                className={classNames(
                  '_e_dropdown__item',
                  item.value === currentValue && '_e_dropdown__item_selected',
                )}
                onMouseDown={() => onChange?.(item.value)}
              >
                {item.title}
              </div>
            ))}
          </div>
        </>
      </BaseInput>
    );
  },
);
