import { ReactNode, MouseEventHandler } from 'react';
import { CommonAttributes } from '../../../../common';

export interface ButtonProps extends CommonAttributes {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'primary';

  /**
   * Button contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Button disabled state.
   */
  disabled?: boolean;

  /**
   * Click handler.
   */
  onClick?: MouseEventHandler<HTMLButtonElement>

  /**
   * Button size.
   * @default default
   */
  size?: 'default' | 'large' | 'small';

  /**
   * Button type.
   * @default button
   */
  type?: 'button' | 'reset' | 'submit';
}
