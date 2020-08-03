import React from 'react';
import classNames from 'classnames';

import { FormLineProps } from './types';

export function FormLine(props: FormLineProps) {
  const {
    className,
    children,
  } = props;

  const formClassNames = classNames({
    [`${className}`]: className,
    _e_form__line: true,
  });

  return (
    <section className={formClassNames}>
      { children }
    </section>
  );
}
