import { CommonAttributes } from '../../../../common';

export interface BadgeProps extends CommonAttributes {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'alert';

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Badge text.
   * @default default
   */
  text?: string;
}
