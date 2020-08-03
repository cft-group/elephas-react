import React, { forwardRef, Ref } from 'react';
import classNames from 'classnames';

import { FieldsetProps } from './types';

export const Fieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(
  (props: FieldsetProps, ref: Ref<HTMLFieldSetElement>) => {
    const {
      children,
      className,
      disabled,
      error,
      form,
      hint,
      legend,
      name,
      ...rest
    } = props;

    const fieldsetClassNames = classNames({
      [`${className}`]: className,
      _e_fieldset: true,
    });

    return (
      <fieldset
        className={fieldsetClassNames}
        disabled={disabled}
        form={form}
        name={name}
        ref={ref}
        {...rest}
      >
        { legend && <legend className="_e_fieldset__legend">{ legend }</legend> }
        { children }
        { error && <div className="_e_fieldset__error">{ error }</div> }
        {
          hint
          && !error
          && <div className="_e_fieldset__hint">{ hint }</div>
        }
      </fieldset>
    );
  },
);
