import React, { forwardRef, Ref } from 'react';

import { BaseInput } from '../base-input';
import { TextareaProps } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props: TextareaProps, ref:Ref<HTMLTextAreaElement>) => {
    const {
      defaultValue,
      rows = 3,
      ...rest
    } = props;

    return (
      <BaseInput {...rest}>
        <textarea
          defaultValue={defaultValue}
          rows={rows}
          ref={ref}
        />
      </BaseInput>
    );
  },
);
