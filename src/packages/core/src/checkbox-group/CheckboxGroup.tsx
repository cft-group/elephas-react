import React, { ChangeEvent } from 'react';

import { CheckboxGroupProps } from './types';
import { Fieldset } from '../fieldset';
import { Checkbox } from '../checkbox';

export const CheckboxGroup = (props: CheckboxGroupProps) => {
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

  const renderOptions = options.map((option) => (
    <Checkbox
      key={option.value}
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
};
