import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { CommonAttributes } from '../../../../common';

interface CustomProps extends CommonAttributes, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual appearance.
   * @default default
   */
  appearance?: 'default' | 'danger' | 'primary';

  /**
   * Additional CSS class.
   */
  className?: string;

  /**
   * Button size.
   * @default default
   */
  size?: 'default' | 'large' | 'small';
}

export type ButtonProps = PropsWithChildren<CustomProps>;
