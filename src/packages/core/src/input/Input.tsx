import React, { forwardRef, Ref } from 'react';

import { BaseInput } from '../base-input';
import { InputProps } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    const {
      defaultValue,
      ...rest
    } = props;

    return (
      <BaseInput {...rest}>
        <input
          defaultValue={defaultValue}
          ref={ref}
        />
      </BaseInput>
    );
  },
);
