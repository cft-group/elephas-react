import { ReactNode, MouseEventHandler } from 'react';
import { CommonAttributes } from '../../../../common';

export interface ActionProps extends CommonAttributes {
  /**
   * Action contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Action icon.
   */
  icon: ReactNode;

  /**
   * Click handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>
}
