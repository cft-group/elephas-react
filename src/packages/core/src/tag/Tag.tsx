import React from 'react';
import classNames from 'classnames';

import { TagProps } from './types';

export function Tag(props: TagProps) {
  const {
    appearance = 'default',
    children,
    className,
    ...rest
  } = props;

  const tagClassNames = classNames({
    [`${className}`]: className,
    _e_tag: true,
    _e_tag_appearance_success: appearance === 'success',
    _e_tag_appearance_warning: appearance === 'warning',
    _e_tag_appearance_danger: appearance === 'danger',
  });

  return (
    <div className={tagClassNames} {...rest}>
      { children }
    </div>
  );
}
