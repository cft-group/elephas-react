import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  Ref,
} from 'react';
import classNames from 'classnames';

import { BreadcrumbsProps } from './types';

export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  (props: BreadcrumbsProps, ref: Ref<HTMLElement>) => {
    const {
      children,
      className,
      ...rest
    } = props;

    const breadcrumbsClassNames = classNames({
      [`${className}`]: className,
      _e_breadcrumbs: true,
    });

    const createItemsFromChildren = () => Children
      .toArray(children)
      .filter((child) => child && isValidElement(child))
      .map((child) => cloneElement(child as ReactElement, { className: '_e_breadcrumbs__item' }));

    return (
      <nav ref={ref} className={breadcrumbsClassNames} {...rest}>
        { createItemsFromChildren() }
      </nav>
    );
  },
);
