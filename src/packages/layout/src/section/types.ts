import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface SectionProps extends CommonAttributes {
  /**
   * Form contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

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
