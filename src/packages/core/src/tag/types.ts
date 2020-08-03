import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface TagProps extends CommonAttributes {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'success' | 'warning';

  /**
   * Tag contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;
}
