import { ReactNode, MouseEventHandler } from 'react';
import { CommonAttributes } from '../../../../common';

export interface BannerProps extends CommonAttributes {
  /**
   * Visual appearance.
   */
  appearance: 'danger' | 'warning';

  /**
   * Banner contents.
   */
  children: ReactNode;

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Click handler for close icon.
   */
  onClick?: MouseEventHandler<HTMLDivElement>
}
