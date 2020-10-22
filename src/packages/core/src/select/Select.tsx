import React, { forwardRef, Ref } from 'react';

import { BaseInput } from '../base-input';
import { SelectProps } from './types';

const ArrowIcon = (
  <div className="_e_select__arrow">
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {/* eslint-disable-next-line max-len */}
      <path d="M8.33031 11.8617L11.2159 14.6815C11.6504 15.1062 12.3523 15.1062 12.7868 14.6815L15.6724 11.8617C16.3743 11.1758 15.873 10 14.8814 10H9.11021C8.11863 10 7.62841 11.1758 8.33031 11.8617Z" />
    </svg>
  </div>
);

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
      <BaseInput
        className={selectClassName}
        {...rest}
        icons={ArrowIcon}
        isIconPassive
      >
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
