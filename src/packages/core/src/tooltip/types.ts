import { ReactNode } from 'react';
import { CommonAttributes } from '../../../../common';

export interface TooltipProps extends CommonAttributes {
  /**
   * Tooltip contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Tooltip position.
   */
  position: 'top' | 'top-right' | 'right' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left' | 'top-left';
}
