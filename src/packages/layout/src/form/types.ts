import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface FormProps extends CommonAttributes {
  /**
   * Form contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;
}

export interface FormLineProps {
  /**
   * Form line contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;
}
