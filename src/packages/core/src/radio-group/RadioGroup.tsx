import React, { ChangeEvent } from 'react';

import { RadioGroupProps } from './types';
import { Fieldset } from '../fieldset';
import { Radio } from '../radio';

export const RadioGroup = (props: RadioGroupProps) => {
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
    ...rest
  } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: changedValue } = event.target;

    if (!disabled && !readonly && value !== changedValue) {
      onChange(event);
    }
  };

  const renderOptions = options.map((option) => (
    <Radio
      key={option.value}
      label={option.title}
      description={option.description}
      checked={option.value === value}
      disabled={disabled}
      readonly={readonly}
      name={name}
      value={option.value}
      onChange={handleChange}
    />
  ));

  return (
    <Fieldset {...rest} className={className} id={id} legend={legend}>
      {renderOptions}
    </Fieldset>
  );
};
