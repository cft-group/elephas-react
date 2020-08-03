import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface FormProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Form contents.
   */
  children: ReactNode;
}

export interface FormLineProps {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Form line contents.
   */
  children: ReactNode;
}
