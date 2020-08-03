import React, { forwardRef, Ref } from 'react';

import { BaseInput } from '../base-input';
import { SelectProps } from './types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    const {
      className,
      defaultValue,
      options,
      ...rest
    } = props;

    const selectClassName = className ? `${className} _e_select` : '_e_select';

    return (
      <BaseInput className={selectClassName} {...rest}>
        <select
          defaultValue={defaultValue}
          ref={ref}
          required
        >
          { options.map((option) => (
            <option
              value={option.value}
              key={option.value}
            >
              { option.title }
            </option>
          )) }
        </select>
      </BaseInput>
    );
  },
);
