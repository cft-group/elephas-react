import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface InfoProps extends CommonAttributes {
  /**
   * Visual appearance.
   */
  appearance: 'warning' | 'error';

  /**
   * Info contents.
   */
  children?: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Fixed width flag.
   * @default false
   */
  fixedWidth?: boolean;
}
