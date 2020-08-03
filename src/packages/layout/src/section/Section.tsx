import React from 'react';
import classNames from 'classnames';

import { SectionProps } from './types';

export function Section(props: SectionProps) {
  const {
    className,
    children,
    heading,
    size = 'normal',
    ...rest
  } = props;

  const sectionClassNames = classNames({
    [`${className}`]: className,
    _e_section: true,
    _e_section_size_normal: size === 'normal',
    _e_section_size_small: size === 'small',
  });

  return (
    <section className={sectionClassNames} {...rest}>
      { heading && size === 'normal' && <h2 className="_e_section__title">{ heading }</h2> }
      { heading && size === 'small' && <h3 className="_e_section__title">{ heading }</h3> }
      { children }
    </section>
  );
}
