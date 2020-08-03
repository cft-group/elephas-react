import { ReactElement, ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface BreadcrumbsProps extends CommonAttributes {
  /**
   * Breadcrumb links.
   */
  children: ReactElement | ReactElement[];

  /**
   * Additional CSS class.
   */
  className?: string;
}

export interface PassiveBreadcrumbProps {
  /**
   * Passive item contents.
   */
  children: ReactNode;
}
