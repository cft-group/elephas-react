import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface SectionProps extends CommonAttributes {
  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Form contents.
   */
  children: ReactNode;

  /**
   * Section heading.
   */
  heading?: ReactNode;

  /**
   * Section size.
   * @default normal
   */
  size?: 'normal' | 'small';
}
