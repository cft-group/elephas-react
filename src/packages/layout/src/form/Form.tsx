import React from 'react';
import classNames from 'classnames';

import { FormProps } from './types';

export function Form(props: FormProps) {
  const {
    className,
    children,
    ...rest
  } = props;

  const formClassNames = classNames({
    [`${className}`]: className,
    _e_form: true,
  });

  return (
    <section className={formClassNames} {...rest}>
      { children }
    </section>
  );
}
