import React, { ChangeEvent, forwardRef, Ref } from 'react';

import { CheckboxGroupProps } from './types';
import { Fieldset } from '../fieldset';
import { Checkbox } from '../checkbox';

export const CheckboxGroup = forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (props: CheckboxGroupProps, ref: Ref<HTMLFieldSetElement>) => {
    const {
      className,
      id,
      legend,
      value,
      name = '',
      disabled = false,
      readonly = false,
      onChange,
      options,
      error,
      hint,
      ...rest
    } = props;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!disabled && !readonly) {
        onChange(event);
      }
    };

    const renderOptions = options.map((option, index) => (
      <Checkbox
      // eslint-disable-next-line react/no-array-index-key
        key={`${option.value}-${index}`}
        label={option.title}
        description={option.description}
        checked={value.includes(option.value)}
        disabled={disabled}
        readonly={readonly}
        name={name}
        value={option.value}
        onChange={handleChange}
      />
    ));

    return (
      <Fieldset
        role="group"
        ref={ref}
        className={className}
        id={id}
        legend={legend}
        error={error}
        hint={hint}
        {...rest}
      >
        {renderOptions}
      </Fieldset>
    );
  },
);
